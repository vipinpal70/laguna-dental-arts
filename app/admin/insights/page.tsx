'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from 'react-hot-toast';
import { Edit2, Trash2, Plus, X, Eye, EyeOff, Upload, ImageIcon, ChevronRight } from 'lucide-react';
import { getStoredArticles, saveArticle, deleteArticle, togglePublishStatus } from '@/lib/insights-store';

/* ─── Templates ─────────────────────────────────────────────────────────── */

const TEMPLATES = {
  standard: {
    id: 'standard',
    name: 'Standard Article',
    tagline: 'General clinical or educational piece',
    icon: '📝',
    preview: 'Introduction → Core Mechanism → Clinical Practice → Conclusion',
    html: `<h2>Introduction</h2>
<p>Provide a detailed introduction here. Explain the key topic, clinical significance, or overall theme of this post.</p>

<h2>Section 1: The Core Mechanism</h2>
<p>Discuss the technical details, clinical procedures, or workflow parameters. Use formatting, bold text, or lists to structure the content.</p>

<h2>Section 2: Clinical Practice Integration</h2>
<p>Provide recommendations for integrating this process or technology into a dental practice. Explain benefits for the chairside assistant, dentist, and laboratory technicians.</p>

<blockquote>"Insert a memorable key quote or technician takeaway statement here to break up the text."</blockquote>

<h2>Conclusion</h2>
<p>Wrap up the article with summary thoughts and a call-to-action or final clinical recommendation.</p>`,
  },
  caseStudy: {
    id: 'caseStudy',
    name: 'Clinical Case Study',
    tagline: 'Step-by-step treatment case walkthrough',
    icon: '🦷',
    preview: 'Patient Presentation → Clinical Protocol → Lab Fabrication → Outcome',
    html: `<h2>Patient Presentation</h2>
<p>Describe the patient's initial condition, aesthetic or functional complaints, prep details, and the treatment planning decisions.</p>

<h2>Clinical Protocol</h2>
<p>Step-by-step description of the clinical phases: diagnostic scanning, tissue retraction, material selection criteria, prep designs, and scanning technique.</p>

<h2>Laboratory Fabrication</h2>
<p>How Synergy 3D processed the case. Detail the CAD/CAM workflow, materials utilized (e.g., monolithic zirconia grade, sinter parameters), and final glaze/stain detailing.</p>

<h2>Restorative Outcome</h2>
<p>Describe the final crown delivery, insertion protocol, occlusal verification, and final patient/dentist satisfaction results.</p>`,
  },
  technicalReview: {
    id: 'technicalReview',
    name: 'Technical Review',
    tagline: 'In-depth material or technology analysis',
    icon: '🔬',
    preview: 'Overview & Composition → Indications → Practical Tips → Lab Verdict',
    html: `<h2>Overview &amp; Composition</h2>
<p>Introduce the material or technology being reviewed, including its key technical composition, mechanical strength (MPa), and aesthetic properties.</p>

<h2>Clinical Indications</h2>
<p>List exactly where this material/technology succeeds and where it should not be utilized.</p>

<h2>Practical Tips for Success</h2>
<ul>
  <li>First technical tip or scanning guideline.</li>
  <li>Second handling, bonding, or preparation guideline.</li>
  <li>Third finishing and maintenance protocol.</li>
</ul>

<h2>Lab Verdict</h2>
<p>Provide our lab's direct feedback and overall evaluation of how this affects dental workflows.</p>`,
  },
} as const;

type TemplateId = keyof typeof TEMPLATES;

/* ─── Schema ─────────────────────────────────────────────────────────────── */

const articleSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  date: z.string().min(1, 'Date is required'),
  readDuration: z.string().min(1, 'Read duration is required'),
  writer: z.string().min(1, 'Writer is required'),
  designation: z.string().min(1, 'Designation is required'),
  category: z.string().min(1, 'Category is required'),
  imageUrl: z.string().optional().default(''),
  content: z.string().min(1, 'Content is required'),
  published: z.boolean().default(true),
});

type ArticleFormValues = z.infer<typeof articleSchema>;

interface ArticleResource {
  _id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  readDuration: string;
  writer: string;
  designation: string;
  category: string;
  content: string;
  imageUrl?: string;
  published: boolean;
  createdAt?: string;
}

/* ─── Component ──────────────────────────────────────────────────────────── */

export default function AdminArticlesPage() {
  const [articles, setArticles] = useState<ArticleResource[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<ArticleResource | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Template picker (shown before the form for new articles)
  const [step, setStep] = useState<'pick-template' | 'edit-article'>('pick-template');
  const [chosenTemplate, setChosenTemplate] = useState<TemplateId | null>(null);

  // Image upload
  const [isUploading, setIsUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ArticleFormValues>({
    resolver: zodResolver(articleSchema) as any,
    defaultValues: { published: true },
  });

  const watchedImageUrl = watch('imageUrl');

  /* ─── Fetch ── */
  const fetchArticles = async () => {
    setIsLoading(true);
    try {
      const data = await getStoredArticles();
      setArticles(data as any[]);
    } catch (err: any) {
      toast.error(err.message || 'Error loading articles');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  /* ─── Image Upload (File -> Data URL) ── */
  const handleImageUpload = (file: File) => {
    if (!file) return;
    setIsUploading(true);
    try {
      const reader = new FileReader();
      reader.onload = (e) => {
        const url = e.target?.result as string;
        setValue('imageUrl', url);
        setImagePreview(url);
        toast.success('Image loaded successfully');
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    } catch (err: any) {
      toast.error(err.message || 'Image upload failed');
      setIsUploading(false);
    }
  };

  /* ─── Open modals ── */
  const openAddModal = () => {
    setEditingArticle(null);
    setStep('pick-template');
    setChosenTemplate(null);
    setImagePreview('');
    const today = new Date();
    reset({
      title: '',
      description: '',
      date: today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readDuration: '6 min read',
      writer: 'Laguna Technical Team',
      designation: 'Clinical Specialist',
      category: 'clinical',
      imageUrl: '',
      content: '',
      published: true,
    });
    setIsModalOpen(true);
  };

  const selectTemplate = (id: TemplateId) => {
    setChosenTemplate(id);
    setValue('content', TEMPLATES[id].html);
    setStep('edit-article');
  };

  const openEditModal = (article: ArticleResource) => {
    setEditingArticle(article);
    setStep('edit-article');
    setChosenTemplate(null);
    setImagePreview(article.imageUrl || '');
    setValue('title', article.title);
    setValue('description', article.description);
    setValue('date', article.date);
    setValue('readDuration', article.readDuration);
    setValue('writer', article.writer);
    setValue('designation', article.designation);
    setValue('category', article.category);
    setValue('imageUrl', article.imageUrl ?? '');
    setValue('content', article.content);
    setValue('published', article.published);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setStep('pick-template');
    setChosenTemplate(null);
    setImagePreview('');
  };

  /* ─── Submit ── */
  const onSubmit = async (values: ArticleFormValues) => {
    setIsSubmitting(true);
    try {
      await saveArticle({
        ...values,
        _id: editingArticle?._id,
      });
      toast.success(editingArticle ? 'Article updated' : 'Article created');
      closeModal();
      fetchArticles();
    } catch (err: any) {
      toast.error(err.message || 'Error saving article');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this article?')) return;
    try {
      await deleteArticle(id);
      toast.success('Article deleted');
      fetchArticles();
    } catch (err: any) {
      toast.error(err.message || 'Error deleting article');
    }
  };

  const togglePublish = async (article: ArticleResource) => {
    try {
      await togglePublishStatus(article._id, !article.published);
      toast.success('Publish status updated');
      fetchArticles();
    } catch (err: any) {
      toast.error(err.message || 'Error');
    }
  };

  /* ─── Render ── */
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xl font-semibold text-navy mb-2 block">Manage Blog Articles</span>
          <p className="text-xs text-slate-600">Create, edit, or delete articles and clinical insights published on the website.</p>
        </div>
        <button
          onClick={openAddModal}
          className="bg-navy hover:bg-navy/90 text-navy font-semibold py-2 px-4 rounded-lg text-xs transition-all cursor-pointer flex items-center gap-1.5 shadow"
        >
          <Plus className="w-4 h-4" />
          Write Article
        </button>
      </div>

      {/* Table */}
      {isLoading ? (
        <div className="flex items-center justify-center py-20 bg-white rounded-xl border border-slate-200 shadow-sm">
          <span className="w-8 h-8 border-3 border-navy border-t-transparent rounded-full animate-spin" />
        </div>
      ) : articles.length === 0 ? (
        <div className="text-center py-20 text-slate-500 font-semibold bg-white rounded-xl border border-slate-200 shadow-sm">
          No articles yet. Click &quot;Write Article&quot; to create your first post.
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse text-sm text-slate-800">
            <thead>
              <tr className="border-b border-black/10 bg-slate-50 text-navy font-bold text-xs uppercase tracking-wider">
                <th className="py-3.5 px-4">Article Details</th>
                <th className="py-3.5 px-4">Writer</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/10">
              {articles.map(art => (
                <tr key={art._id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 max-w-sm">
                    <div className="flex gap-3 items-start">
                      {art.imageUrl && (
                        <img src={art.imageUrl} alt={art.title} className="w-12 h-12 rounded-lg object-cover bg-slate-100 border border-slate-200 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <div className="font-semibold text-navy leading-tight">{art.title}</div>
                        <div className="text-xs text-slate-500 mt-1 line-clamp-1">{art.description}</div>
                        <div className="text-[10px] text-blue-600 font-semibold mt-1">/{art.slug}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">{art.writer}</td>
                  <td className="py-3.5 px-4">
                    <span className="bg-slate-100 border border-slate-200 rounded-full px-2.5 py-0.5 text-xs text-slate-800 capitalize font-medium">{art.category}</span>
                  </td>
                  {/* <td className="py-3.5 px-4">{art.views || 0}</td> */}
                  <td className="py-3.5 px-4">
                    <button
                      onClick={() => togglePublish(art)}
                      className={`inline-flex items-center gap-1 border-none bg-transparent cursor-pointer text-xs font-semibold transition-all ${art.published ? 'text-emerald-600' : 'text-slate-400'}`}
                    >
                      {art.published ? <><Eye className="w-3.5 h-3.5" /> Published</> : <><EyeOff className="w-3.5 h-3.5" /> Hidden</>}
                    </button>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => openEditModal(art)} className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 cursor-pointer transition-colors" title="Edit">
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button onClick={() => handleDelete(art._id)} className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 cursor-pointer transition-colors" title="Delete">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ── Modal ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[5000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-black rounded-2xl w-full overflow-hidden shadow-2xl relative flex flex-col text-slate-900"
            style={{ maxWidth: step === 'pick-template' ? '680px' : '760px', maxHeight: '95vh' }}>

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 bg-slate-50/50">
              <div className="flex items-center gap-3">
                {step === 'edit-article' && !editingArticle && (
                  <button
                    onClick={() => setStep('pick-template')}
                    className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 border border-slate-200 cursor-pointer transition-colors"
                  >
                    ←
                  </button>
                )}
                <div>
                  <h3 className="text-base font-semibold text-navy">
                    {editingArticle
                      ? 'Edit Article'
                      : step === 'pick-template'
                      ? 'Choose a Template'
                      : `New Article · ${chosenTemplate ? TEMPLATES[chosenTemplate].name : ''}`}
                  </h3>
                  {step === 'pick-template' && (
                    <p className="text-[11px] text-slate-500 mt-0.5">Every article starts from a predefined structure.</p>
                  )}
                </div>
              </div>
              <button onClick={closeModal} className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 cursor-pointer flex items-center justify-center text-slate-700 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* ── Step 1: Template Picker ── */}
            {step === 'pick-template' && (
              <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white">
                {(Object.values(TEMPLATES) as typeof TEMPLATES[TemplateId][]).map(tpl => (
                  <button
                    key={tpl.id}
                    onClick={() => selectTemplate(tpl.id as TemplateId)}
                    className="text-left bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-500 rounded-xl p-5 transition-all group cursor-pointer flex flex-col gap-3 shadow-sm"
                  >
                    <span className="text-3xl">{tpl.icon}</span>
                    <div>
                      <div className="font-semibold text-navy text-sm leading-snug group-hover:text-blue-600 transition-colors">{tpl.name}</div>
                      <div className="text-[11px] text-slate-500 mt-1 leading-relaxed">{tpl.tagline}</div>
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono leading-relaxed border-t border-slate-200 pt-3 mt-auto">
                      {tpl.preview}
                    </div>
                    <div className="flex items-center gap-1 text-blue-600 text-[11px] font-semibold mt-1">
                      Use this template <ChevronRight className="w-3 h-3" />
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* ── Step 2: Article Form ── */}
            {step === 'edit-article' && (
              <form onSubmit={handleSubmit(onSubmit)} className="p-6 overflow-y-auto space-y-4 flex-1 bg-white">

                {/* Row 1: Title */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Title</label>
                  <input
                    type="text"
                    placeholder="e.g. Monolithic Zirconia in 2026…"
                    {...register('title')}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-slate-900 text-sm focus:border-navy outline-none"
                  />
                  {errors.title && <span className="text-red-600 text-xs mt-1 block">{errors.title.message}</span>}
                </div>

                {/* Row 2: Writer + Designation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Writer / Author</label>
                    <input
                      type="text"
                      placeholder="e.g. Kelli Trainor"
                      {...register('writer')}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-slate-900 text-sm focus:border-navy outline-none"
                    />
                    {errors.writer && <span className="text-red-600 text-xs mt-1 block">{errors.writer.message}</span>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Designation</label>
                    <input
                      type="text"
                      placeholder="e.g. VP of Customer Integration"
                      {...register('designation')}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-slate-900 text-sm focus:border-navy outline-none"
                    />
                    {errors.designation && <span className="text-red-600 text-xs mt-1 block">{errors.designation.message}</span>}
                  </div>
                </div>

                {/* Row 3: Category, Date, Read Duration */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Category</label>
                    <select {...register('category')} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 text-sm focus:border-navy outline-none">
                      <option value="digital-dentistry">Digital Dentistry</option>
                      <option value="materials">Materials</option>
                      <option value="clinical">Clinical</option>
                      <option value="industry">Industry</option>
                      <option value="case-studies">Case Studies</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Date</label>
                    <input
                      type="text"
                      placeholder="May 12, 2026"
                      {...register('date')}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-slate-900 text-sm focus:border-navy outline-none"
                    />
                    {errors.date && <span className="text-red-600 text-xs mt-1 block">{errors.date.message}</span>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Read Duration</label>
                    <input
                      type="text"
                      placeholder="6 min read"
                      {...register('readDuration')}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-slate-900 text-sm focus:border-navy outline-none"
                    />
                    {errors.readDuration && <span className="text-red-600 text-xs mt-1 block">{errors.readDuration.message}</span>}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Brief Description</label>
                  <input
                    type="text"
                    placeholder="Short summary shown in article cards…"
                    {...register('description')}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-slate-900 text-sm focus:border-navy outline-none"
                  />
                  {errors.description && <span className="text-red-600 text-xs mt-1 block">{errors.description.message}</span>}
                </div>

                {/* Cover Image Upload */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Cover Image <span className="normal-case font-normal text-slate-400">(optional)</span></label>
                  <input type="hidden" {...register('imageUrl')} />
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className={`relative w-full rounded-xl border-2 border-dashed transition-all cursor-pointer overflow-hidden ${
                      isUploading ? 'border-blue-500/50 bg-blue-50/50' : 'border-slate-300 hover:border-navy hover:bg-slate-50'
                    }`}
                  >
                    {(imagePreview || watchedImageUrl) ? (
                      <div className="relative h-32">
                        <img src={imagePreview || watchedImageUrl} alt="Cover" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <span className="text-white text-xs font-semibold flex items-center gap-1.5"><Upload className="w-3.5 h-3.5" /> Replace image</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-8 gap-2 bg-slate-50/50">
                        {isUploading ? (
                          <>
                            <span className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                            <span className="text-xs text-blue-600 font-semibold">Uploading image…</span>
                          </>
                        ) : (
                          <>
                            <ImageIcon className="w-7 h-7 text-slate-400" />
                            <span className="text-xs text-slate-600 font-semibold">Click to upload cover image</span>
                            <span className="text-[10px] text-slate-400">PNG, JPG, WEBP · Max 10MB</span>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={e => {
                      const file = e.target.files?.[0];
                      if (file) handleImageUpload(file);
                      e.target.value = '';
                    }}
                  />
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider">Article Content <span className="text-slate-400 normal-case font-normal">(HTML supported)</span></label>
                    {chosenTemplate && (
                      <span className="text-[10px] text-blue-600 font-semibold">{TEMPLATES[chosenTemplate].name} template</span>
                    )}
                  </div>
                  <textarea
                    rows={12}
                    placeholder="Your article HTML content…"
                    {...register('content')}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 text-sm focus:border-navy outline-none resize-y font-mono"
                  />
                  {errors.content && <span className="text-red-600 text-xs mt-1 block">{errors.content.message}</span>}
                </div>

                {/* Publish toggle */}
                <div className="flex items-center gap-2 pt-1">
                  <input type="checkbox" id="published" {...register('published')} className="w-4 h-4 accent-navy" />
                  <label htmlFor="published" className="text-xs font-semibold text-slate-800 cursor-pointer select-none">Publish immediately</label>
                </div>

                {/* Footer buttons */}
                <div className="border-t border-slate-200 pt-5 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-red-500 hover:text-red-700 font-semibold py-2 px-5 rounded-lg text-xs cursor-pointer disabled:opacity-50 disabled:pointer-events-none transition-colors shadow"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || isUploading}
                    className="bg-navy hover:bg-navy/90 text-navy font-semibold py-2 px-5 rounded-lg text-xs cursor-pointer disabled:opacity-50 disabled:pointer-events-none transition-colors shadow"
                  >
                    {isSubmitting ? 'Saving…' : editingArticle ? 'Save Changes' : 'Publish Article'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
