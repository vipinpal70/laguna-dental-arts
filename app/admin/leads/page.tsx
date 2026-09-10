'use client';

import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Trash2, Mail, Phone, RefreshCw } from 'lucide-react';

interface Lead {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  practiceName?: string;
  interest?: string;
  message?: string;
  status?: string;
  createdAt?: string;
}

function formatDate(value?: string): string {
  if (!value) return '-';
  const d = new Date(value);
  if (isNaN(d.getTime())) return '-';
  return d.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchLeads = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/leads');
      if (!res.ok) throw new Error('Failed to fetch leads');
      const data = await res.json();
      setLeads(data);
    } catch (err: any) {
      toast.error(err.message || 'Error loading leads');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;
    try {
      const res = await fetch(`/api/leads/${id}`, { method: 'DELETE' });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || 'Failed to delete lead');
      }
      toast.success('Lead deleted successfully');
      setLeads((prev) => prev.filter((l) => l._id !== id));
    } catch (err: any) {
      toast.error(err.message || 'Error deleting lead');
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-navy">Contact Form Leads</h2>
          <p className="text-xs text-slate-600 mt-0.5">
            Inquiries submitted through the website contact form.
            {leads.length > 0 && <span className="ml-1 font-semibold text-slate-800">{leads.length} total.</span>}
          </p>
        </div>
        <button
          onClick={fetchLeads}
          className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 shadow-sm cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          Refresh
        </button>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-10">
          <span className="w-8 h-8 border-3 border-[#030e44] border-t-transparent rounded-full animate-spin" />
        </div>
      ) : leads.length === 0 ? (
        <div className="text-center py-10 text-slate-500 font-semibold border border-dashed border-slate-200 bg-slate-50/50 rounded-xl">
          No leads yet. New contact form submissions will appear here.
        </div>
      ) : (
        <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-sm">
          <table className="w-full text-left border-collapse text-sm text-slate-800">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 text-xs font-bold uppercase tracking-wider">
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Contact</th>
                <th className="py-3 px-4">Practice</th>
                <th className="py-3 px-4">Interest</th>
                <th className="py-3 px-4">Message</th>
                <th className="py-3 px-4">Received</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {leads.map((lead) => (
                <tr key={lead._id} className="hover:bg-slate-50/80 transition-colors align-top">
                  <td className="py-3.5 px-4">
                    <div className="font-semibold text-slate-900 leading-tight">
                      {lead.firstName} {lead.lastName}
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <a href={`mailto:${lead.email}`} className="flex items-center gap-1.5 text-blue-600 font-medium hover:underline">
                      <Mail className="w-3.5 h-3.5 shrink-0" />
                      <span className="break-all">{lead.email}</span>
                    </a>
                    {lead.phone && (
                      <a href={`tel:${lead.phone}`} className="flex items-center gap-1.5 text-slate-600 mt-1 hover:underline">
                        <Phone className="w-3.5 h-3.5 shrink-0" />
                        {lead.phone}
                      </a>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-slate-700">{lead.practiceName || '-'}</td>
                  <td className="py-3.5 px-4">
                    {lead.interest ? (
                      <span className="inline-block bg-slate-100 border border-slate-200 rounded-full px-2.5 py-0.5 text-xs text-slate-800 font-medium">
                        {lead.interest}
                      </span>
                    ) : (
                      <span className="text-slate-400 text-xs">-</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 max-w-xs">
                    <div className="text-xs text-slate-600 whitespace-pre-wrap">{lead.message || <span className="text-slate-400">-</span>}</div>
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-500 whitespace-nowrap">{formatDate(lead.createdAt)}</td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => handleDelete(lead._id)}
                      className="p-1.5 rounded bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 cursor-pointer transition-colors"
                      title="Delete Lead"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
