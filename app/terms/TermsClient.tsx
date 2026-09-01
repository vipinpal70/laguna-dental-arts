"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons/Icon";

const TERMS_SECTIONS = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "services", title: "2. Description of Services" },
  { id: "submission", title: "3. Service Agreement & Case Submission" },
  { id: "payment", title: "4. Payment Terms & Billing" },
  { id: "warranty", title: "5. Quality Assurance & Warranties" },
  { id: "shipping", title: "6. Shipping & Delivery" },
  { id: "ip", title: "7. Intellectual Property" },
  { id: "liability", title: "8. Limitation of Liability" },
  { id: "privacy-confidentiality", title: "9. Privacy & Confidentiality" },
  { id: "regulatory", title: "10. Regulatory Compliance" },
  { id: "termination", title: "11. Termination" },
  { id: "disputes", title: "12. Dispute Resolution" },
  { id: "general", title: "13. General Provisions" },
  { id: "contact", title: "14. Contact Information" },
];

export function TermsClient() {
  const [search, setSearch] = useState("");
  const [activeSection, setActiveSection] = useState("");

  const query = search.toLowerCase().trim();

  const isMatch = (text: string) => !query || text.toLowerCase().includes(query);

  return (
    <main className="legal-page">
      {/* Hero Header */}
      <section className="phero phero--image phero--contact">
        <div className="container">
          <div className="phero__crumbs reveal">
            <Link href="/">Home</Link> / Terms &amp; Conditions
          </div>
          <span className="eyebrow reveal">Legal &amp; Compliance</span>
          <h1 className="display reveal">Terms &amp; Conditions</h1>
          <p className="phero__sub reveal">
            Effective Date: January 1, 2025 · Last Updated: January 1, 2025
          </p>
          <div className="reveal" style={{ marginTop: 20 }}>
            <span className="legal-badge">
              <Icon name="check" size={14} strokeWidth={2.5} /> FDA Registered Laboratory · ISO 13485
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section">
        <div className="container">
          <div className="legal-layout">
            {/* Sidebar Sticky TOC */}
            <aside className="legal-sidebar reveal">
              <div className="legal-search-box">
                <Icon name="search" size={16} className="legal-search-icon" />
                <input
                  type="text"
                  placeholder="Search terms..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="legal-search-input"
                />
              </div>

              <h3>Table of Contents</h3>
              <nav className="legal-toc-list">
                {TERMS_SECTIONS.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={() => setActiveSection(sec.id)}
                    className={`legal-toc-link ${activeSection === sec.id ? "active" : ""}`}
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Content Cards */}
            <div className="legal-content">
              {/* Section 1 */}
              {isMatch("1. Acceptance of Terms website services submitting cases Laguna Dental Arts Client agree bound terms") && (
                <article id="acceptance" className="legal-card reveal">
                  <h2>1. Acceptance of Terms</h2>
                  <p>
                    By accessing our website, using our services, or submitting cases to Laguna Dental Arts (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;) agree to be bound by these Terms &amp; Conditions. If you do not agree to these terms, please do not use our services.
                  </p>
                </article>
              )}

              {/* Section 2 */}
              {isMatch("2. Description of Services dental laboratory crown bridge removable prosthetics dentures implant restorations digital workflow CAD/CAM quality assurance treatment planning") && (
                <article id="services" className="legal-card reveal">
                  <h2>2. Description of Services</h2>
                  <p>Laguna Dental Arts provides dental laboratory services including but not limited to:</p>
                  <ul>
                    <li>Crown and bridge fabrication</li>
                    <li>Removable prosthetics and dentures</li>
                    <li>Implant restorations and components</li>
                    <li>Digital workflow services and CAD/CAM</li>
                    <li>Quality assurance and technical support</li>
                    <li>Case consultation and treatment planning assistance</li>
                  </ul>
                </article>
              )}

              {/* Section 3 */}
              {isMatch("3. Service Agreement and Case Submission Case Requirements Acceptance of Cases Modifications and Changes prescription impressions digital scans models HIPAA rush cases restart color matches") && (
                <article id="submission" className="legal-card reveal">
                  <h2>3. Service Agreement and Case Submission</h2>
                  
                  <h3>Case Requirements</h3>
                  <ul>
                    <li>All cases must include complete and accurate prescription forms</li>
                    <li>Adequate impressions, digital scans, or models must be provided</li>
                    <li>Clear instructions and specifications are required</li>
                    <li>Patient information must be HIPAA-compliant and authorized</li>
                  </ul>

                  <h3>Acceptance of Cases</h3>
                  <ul>
                    <li>We reserve the right to refuse any case that does not meet our standards</li>
                    <li>Cases requiring clarification may be delayed until sufficient information is provided</li>
                    <li>Rush cases are subject to availability and additional fees</li>
                    <li>We will confirm receipt and estimated completion dates for all accepted cases</li>
                  </ul>

                  <h3>Modifications and Changes</h3>
                  <ul>
                    <li>Case modifications after fabrication has begun may incur additional charges</li>
                    <li>Significant changes may require case restart with associated fees</li>
                    <li>Color matches and aesthetic adjustments are limited to reasonable attempts</li>
                    <li>Final approval of cases is subject to clinical evaluation</li>
                  </ul>
                </article>
              )}

              {/* Section 4 */}
              {isMatch("4. Payment Terms and Billing Pricing Fees Net 30 late payments finance charges credit terms approval limit guarantee suspended") && (
                <article id="payment" className="legal-card reveal">
                  <h2>4. Payment Terms and Billing</h2>

                  <h3>Pricing and Fees</h3>
                  <ul>
                    <li>All prices are subject to change without notice</li>
                    <li>Rush cases and special requests may incur additional fees</li>
                    <li>Shipping and handling charges apply unless otherwise specified</li>
                    <li>Sales tax will be added where applicable</li>
                  </ul>

                  <h3>Payment Terms</h3>
                  <ul>
                    <li>Payment terms are Net 30 days for approved accounts</li>
                    <li>New accounts may require payment upon delivery or credit approval</li>
                    <li>Late payments may incur finance charges as permitted by law</li>
                    <li>Accounts in default may be subject to collection activities</li>
                  </ul>

                  <h3>Credit Terms</h3>
                  <ul>
                    <li>Credit applications are subject to approval</li>
                    <li>Credit limits may be established and modified at our discretion</li>
                    <li>Personal guarantees may be required for business accounts</li>
                    <li>Credit terms may be suspended for past due accounts</li>
                  </ul>
                </article>
              )}

              {/* Section 5 */}
              {isMatch("5. Quality Assurance and Warranties Quality Standards Limited Warranty Warranty Exclusions 90 days remake defects FDA requirements wear tear improper storage third party") && (
                <article id="warranty" className="legal-card reveal">
                  <h2>5. Quality Assurance and Warranties</h2>

                  <h3>Quality Standards</h3>
                  <ul>
                    <li>All restorations are fabricated to accepted dental laboratory standards</li>
                    <li>Materials used meet FDA requirements and industry specifications</li>
                    <li>Quality control procedures are followed throughout fabrication</li>
                    <li>Cases are inspected before delivery to ensure compliance</li>
                  </ul>

                  <div className="legal-callout">
                    <h4>Limited 90-Day Warranty</h4>
                    <p>
                      We warrant our work against defects in materials and workmanship for a period of <strong>90 days from delivery date</strong>. Qualifying defective restorations will be remade at no charge.
                    </p>
                  </div>

                  <h3>Limited Warranty Terms</h3>
                  <ul>
                    <li>We warrant our work against defects in materials and workmanship</li>
                    <li>Warranty period is 90 days from delivery date</li>
                    <li>Warranty covers remake at no charge for qualifying defects</li>
                    <li>Warranty does not cover damage from clinical procedures or patient use</li>
                  </ul>

                  <h3>Warranty Exclusions</h3>
                  <p>The warranty does not apply to:</p>
                  <ul>
                    <li>Normal wear and tear</li>
                    <li>Damage from improper handling or storage</li>
                    <li>Cases not used within reasonable time frames</li>
                    <li>Modifications made by third parties</li>
                    <li>Issues arising from inadequate case information</li>
                  </ul>
                </article>
              )}

              {/* Section 6 */}
              {isMatch("6. Shipping and Delivery Shipping Methods Risk of Loss Delivery Schedules UPS FedEx tracking insurance claims 24 hours delays estimates") && (
                <article id="shipping" className="legal-card reveal">
                  <h2>6. Shipping and Delivery</h2>

                  <h3>Shipping Methods</h3>
                  <ul>
                    <li>Standard shipping via UPS or FedEx for most deliveries</li>
                    <li>Special shipping arrangements available upon request</li>
                    <li>Insurance and tracking provided for all shipments</li>
                    <li>Delivery confirmation required for high-value cases</li>
                  </ul>

                  <h3>Risk of Loss</h3>
                  <ul>
                    <li>Risk of loss transfers upon delivery to carrier</li>
                    <li>Client is responsible for inspecting shipments upon receipt</li>
                    <li>Damage claims must be reported within 24 hours of delivery</li>
                    <li>We will assist with carrier damage claims as needed</li>
                  </ul>

                  <h3>Delivery Schedules</h3>
                  <ul>
                    <li>Delivery dates are estimates and not guaranteed</li>
                    <li>Delays may occur due to case complexity or unforeseen circumstances</li>
                    <li>Rush delivery available for additional fees</li>
                    <li>We will notify clients of any significant delays</li>
                  </ul>
                </article>
              )}

              {/* Section 7 */}
              {isMatch("7. Intellectual Property Proprietary Information Client Materials designs techniques processes property confidential digital files models retention") && (
                <article id="ip" className="legal-card reveal">
                  <h2>7. Intellectual Property</h2>

                  <h3>Proprietary Information</h3>
                  <ul>
                    <li>All case designs, techniques, and processes remain our property</li>
                    <li>Client case information is confidential and protected</li>
                    <li>Digital files and models may be retained for records</li>
                    <li>Reproduction of our work without permission is prohibited</li>
                  </ul>

                  <h3>Client Materials</h3>
                  <ul>
                    <li>Impressions, models, and digital files remain client property</li>
                    <li>We may retain copies for quality assurance and records</li>
                    <li>Client materials will be returned or disposed of as requested</li>
                    <li>Digital files may be stored for future reference with permission</li>
                  </ul>
                </article>
              )}

              {/* Section 8 */}
              {isMatch("8. Limitation of Liability Disclaimer of Warranties Limitation of Damages Indemnification as is merchantability clinical success lost profits malpractice patient claims") && (
                <article id="liability" className="legal-card reveal">
                  <h2>8. Limitation of Liability</h2>

                  <h3>Disclaimer of Warranties</h3>
                  <ul>
                    <li>Services are provided &quot;as is&quot; without express or implied warranties</li>
                    <li>We disclaim warranties of merchantability and fitness for particular purpose</li>
                    <li>No warranty is made regarding clinical success or patient satisfaction</li>
                    <li>Client assumes responsibility for clinical evaluation and use</li>
                  </ul>

                  <h3>Limitation of Damages</h3>
                  <ul>
                    <li>Our liability is limited to the cost of the specific restoration or service</li>
                    <li>We are not liable for consequential, incidental, or special damages</li>
                    <li>This includes lost profits, patient claims, or practice disruption</li>
                    <li>Total liability for any claim shall not exceed the amount paid for services</li>
                  </ul>

                  <h3>Indemnification</h3>
                  <ul>
                    <li>Client agrees to indemnify us against claims arising from case use</li>
                    <li>This includes patient injuries, malpractice claims, and regulatory issues</li>
                    <li>Client maintains responsibility for clinical decisions and patient care</li>
                    <li>We will cooperate with reasonable defense efforts</li>
                  </ul>
                </article>
              )}

              {/* Section 9 */}
              {isMatch("9. Privacy and Confidentiality HIPAA Compliance Information Use PHI protected health information employees security data quality research consent competitors") && (
                <article id="privacy-confidentiality" className="legal-card reveal">
                  <h2>9. Privacy and Confidentiality</h2>

                  <h3>HIPAA Compliance</h3>
                  <ul>
                    <li>We maintain HIPAA-compliant procedures for protected health information</li>
                    <li>Patient information is used only for legitimate business purposes</li>
                    <li>Confidentiality agreements are in place with all employees</li>
                    <li>Data security measures protect against unauthorized access</li>
                  </ul>

                  <h3>Information Use</h3>
                  <ul>
                    <li>Case information may be used for quality improvement</li>
                    <li>De-identified data may be used for research and development</li>
                    <li>Marketing use of case information requires specific consent</li>
                    <li>Client information is not shared with competitors</li>
                  </ul>
                </article>
              )}

              {/* Section 10 */}
              {isMatch("10. Regulatory Compliance FDA and State Regulations Professional Standards registration quality system adverse event licensing education certification liability insurance") && (
                <article id="regulatory" className="legal-card reveal">
                  <h2>10. Regulatory Compliance</h2>

                  <h3>FDA and State Regulations</h3>
                  <ul>
                    <li>All materials and processes comply with applicable regulations</li>
                    <li>Device registration and quality system requirements are maintained</li>
                    <li>Adverse event reporting procedures are in place</li>
                    <li>State licensing requirements are met for all jurisdictions served</li>
                  </ul>

                  <h3>Professional Standards</h3>
                  <ul>
                    <li>Services are provided in accordance with dental laboratory standards</li>
                    <li>Continuing education and certification requirements are maintained</li>
                    <li>Industry best practices are followed for all procedures</li>
                    <li>Professional liability insurance is maintained</li>
                  </ul>
                </article>
              )}

              {/* Section 11 */}
              {isMatch("11. Termination Service Termination Effect of Termination notice unpaid amounts work product warranty survival") && (
                <article id="termination" className="legal-card reveal">
                  <h2>11. Termination</h2>

                  <h3>Service Termination</h3>
                  <ul>
                    <li>Either party may terminate services with reasonable notice</li>
                    <li>Outstanding cases will be completed unless otherwise agreed</li>
                    <li>Payment obligations survive termination</li>
                    <li>Confidentiality obligations continue indefinitely</li>
                  </ul>

                  <h3>Effect of Termination</h3>
                  <ul>
                    <li>All unpaid amounts become immediately due</li>
                    <li>Materials and work product will be returned as requested</li>
                    <li>Warranty obligations remain in effect for completed work</li>
                    <li>These terms survive termination to the extent necessary</li>
                  </ul>
                </article>
              )}

              {/* Section 12 */}
              {isMatch("12. Dispute Resolution Governing Law Alternative Dispute Resolution California Sacramento County jurisdiction patent trademark copyright negotiation mediation arbitration attorney fees") && (
                <article id="disputes" className="legal-card reveal">
                  <h2>12. Dispute Resolution</h2>

                  <h3>Governing Law</h3>
                  <ul>
                    <li>These terms are governed by California state law</li>
                    <li>Any disputes will be resolved in Sacramento County, California</li>
                    <li>California courts have exclusive jurisdiction over disputes</li>
                    <li>Federal law applies to patent, trademark, and copyright matters</li>
                  </ul>

                  <h3>Alternative Dispute Resolution</h3>
                  <ul>
                    <li>Parties agree to attempt good faith negotiation before litigation</li>
                    <li>Mediation may be required before court proceedings</li>
                    <li>Arbitration may be used for disputes under specified amounts</li>
                    <li>Attorney fees may be awarded to prevailing party</li>
                  </ul>
                </article>
              )}

              {/* Section 13 */}
              {isMatch("13. General Provisions Entire Agreement Severability Force Majeure written oral representations disasters labor disputes mitigation resume") && (
                <article id="general" className="legal-card reveal">
                  <h2>13. General Provisions</h2>

                  <h3>Entire Agreement</h3>
                  <ul>
                    <li>These terms constitute the entire agreement between parties</li>
                    <li>Oral agreements or representations are not binding</li>
                    <li>Modifications must be in writing and signed by both parties</li>
                    <li>Previous agreements are superseded by these terms</li>
                  </ul>

                  <h3>Severability</h3>
                  <ul>
                    <li>Invalid provisions do not affect validity of remaining terms</li>
                    <li>Unenforceable clauses will be modified to the extent possible</li>
                    <li>Essential terms must remain enforceable for agreement to continue</li>
                    <li>Partial invalidity does not void the entire agreement</li>
                  </ul>

                  <h3>Force Majeure</h3>
                  <ul>
                    <li>Neither party is liable for delays due to circumstances beyond control</li>
                    <li>This includes natural disasters, labor disputes, and government actions</li>
                    <li>Affected party must provide notice and mitigate damages</li>
                    <li>Performance obligations resume when circumstances permit</li>
                  </ul>
                </article>
              )}

              {/* Section 14 */}
              {isMatch("14. Contact Information Laguna Dental Arts email phone address business hours questions Elk Grove CA") && (
                <article id="contact" className="legal-card reveal">
                  <h2>14. Contact Information</h2>
                  <p>For questions about these Terms &amp; Conditions, please contact:</p>
                  
                  <div className="legal-callout">
                    <h4>Laguna Dental Arts</h4>
                    <p style={{ marginTop: 8 }}>
                      <strong>Email:</strong> <a href="mailto:dev@lagunadentalarts.com" style={{ color: "var(--blue)" }}>dev@lagunadentalarts.com</a><br />
                      <strong>Phone:</strong> <a href="tel:+19166881333" style={{ color: "var(--blue)" }}>(916) 688-1333</a><br />
                      <strong>Address:</strong> 9152 Elkmont Way, Elk Grove, CA 95624
                    </p>
                  </div>
                  <p style={{ fontSize: "0.88rem", color: "var(--ink-faint)", marginTop: 14 }}>
                    These Terms &amp; Conditions are designed to protect both parties while ensuring clear expectations for dental laboratory services. Legal review is recommended to ensure compliance with applicable laws and industry standards.
                  </p>
                </article>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
