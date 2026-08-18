"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons/Icon";

const PRIVACY_SECTIONS = [
  { id: "intro", title: "1. Introduction" },
  { id: "collect", title: "2. Information We Collect" },
  { id: "use", title: "3. How We Use Your Information" },
  { id: "sharing", title: "4. Information Sharing & Disclosure" },
  { id: "security", title: "5. Data Security" },
  { id: "rights", title: "6. Your Privacy Rights (HIPAA & CCPA)" },
  { id: "cookies", title: "7. Cookies & Tracking Technologies" },
  { id: "third-party", title: "8. Third-Party Links" },
  { id: "children", title: "9. Children's Privacy" },
  { id: "transfers", title: "10. International Data Transfers" },
  { id: "retention", title: "11. Data Retention" },
  { id: "changes", title: "12. Changes to Privacy Policy" },
  { id: "contact", title: "13. Contact & Privacy Officer" },
];

export function PrivacyClient() {
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
            <Link href="/">Home</Link> / Privacy Policy
          </div>
          <span className="eyebrow reveal">Legal &amp; Privacy</span>
          <h1 className="display reveal">Privacy Policy</h1>
          <p className="phero__sub reveal">
            Effective Date: January 1, 2025 · Last Updated: January 1, 2025
          </p>
          <div className="reveal" style={{ marginTop: 20 }}>
            <span className="legal-badge">
              <Icon name="check" size={14} strokeWidth={2.5} /> HIPAA Compliant Entity · CCPA Protected
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
                  placeholder="Search privacy policy..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="legal-search-input"
                />
              </div>

              <h3>Table of Contents</h3>
              <nav className="legal-toc-list">
                {PRIVACY_SECTIONS.map((sec) => (
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
              {isMatch("1. Introduction privacy confidentiality Laguna Dental Arts HIPAA health information safeguards") && (
                <article id="intro" className="legal-card reveal">
                  <h2>1. Introduction</h2>
                  <p>
                    Laguna Dental Arts (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy and confidentiality of all personal and health information entrusted to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our dental laboratory services.
                  </p>
                  <div className="legal-callout" id="hipaa">
                    <h4>HIPAA Compliance Statement</h4>
                    <p>
                      As a dental laboratory, we are subject to the <strong>Health Insurance Portability and Accountability Act (HIPAA)</strong> and other applicable privacy laws. We take our privacy obligations seriously and have implemented comprehensive safeguards to protect your information.
                    </p>
                  </div>
                </article>
              )}

              {/* Section 2 */}
              {isMatch("2. Information We Collect Personal Information PHI Protected Health Information Website Information name contact credentials billing dental records prescriptions impressions diagnostic images IP address browser device") && (
                <article id="collect" className="legal-card reveal">
                  <h2>2. Information We Collect</h2>

                  <h3>Personal Information</h3>
                  <p>We may collect the following types of personal information:</p>
                  <ul>
                    <li>Name and contact information (address, phone number, email)</li>
                    <li>Professional credentials and license information (for dental professionals)</li>
                    <li>Billing and payment information</li>
                    <li>Case-specific information and dental records</li>
                    <li>Website usage data and analytics</li>
                  </ul>

                  <h3>Protected Health Information (PHI)</h3>
                  <p>As a HIPAA-covered entity, we collect and process protected health information including:</p>
                  <ul>
                    <li>Patient dental records and case information</li>
                    <li>Treatment plans and prescriptions</li>
                    <li>Digital impressions and diagnostic images</li>
                    <li>Communication related to patient care</li>
                  </ul>

                  <h3>Website Information</h3>
                  <p>When you visit our website, we automatically collect:</p>
                  <ul>
                    <li>IP address and browser information</li>
                    <li>Pages visited and time spent on site</li>
                    <li>Referring websites and search terms</li>
                    <li>Device and operating system information</li>
                  </ul>
                </article>
              )}

              {/* Section 3 */}
              {isMatch("3. How We Use Your Information Dental Laboratory Services Business Operations Website Enhancement cases quality assurance billing support analytics fraud security") && (
                <article id="use" className="legal-card reveal">
                  <h2>3. How We Use Your Information</h2>

                  <h3>Dental Laboratory Services</h3>
                  <ul>
                    <li>Processing and completing dental cases</li>
                    <li>Quality assurance and case management</li>
                    <li>Communication with dental practices</li>
                    <li>Billing and payment processing</li>
                    <li>Compliance with regulatory requirements</li>
                  </ul>

                  <h3>Business Operations</h3>
                  <ul>
                    <li>Improving our services and website</li>
                    <li>Customer support and technical assistance</li>
                    <li>Marketing communications (with consent)</li>
                    <li>Legal compliance and business administration</li>
                  </ul>

                  <h3>Website Enhancement</h3>
                  <ul>
                    <li>Analyzing website performance and user experience</li>
                    <li>Personalizing content and services</li>
                    <li>Preventing fraud and ensuring security</li>
                  </ul>
                </article>
              )}

              {/* Section 4 */}
              {isMatch("4. Information Sharing and Disclosure HIPAA Permitted Disclosures Service Providers Legal Requirements dental practices payment business associates third party shipping law court order safety") && (
                <article id="sharing" className="legal-card reveal">
                  <h2>4. Information Sharing and Disclosure</h2>
                  <p>We may share your information in the following circumstances:</p>

                  <h3>HIPAA-Permitted Disclosures</h3>
                  <ul>
                    <li>With dental practices for treatment purposes</li>
                    <li>For payment and healthcare operations</li>
                    <li>As required by law or court order</li>
                    <li>For public health and safety purposes</li>
                    <li>With business associates under HIPAA-compliant agreements</li>
                  </ul>

                  <h3>Service Providers</h3>
                  <p>We may share information with trusted third-party service providers who:</p>
                  <ul>
                    <li>Assist in our business operations</li>
                    <li>Provide technology and security services</li>
                    <li>Process payments and handle shipping</li>
                    <li>Comply with our privacy and security standards</li>
                  </ul>

                  <h3>Legal Requirements</h3>
                  <p>We may disclose information when required to:</p>
                  <ul>
                    <li>Comply with applicable laws and regulations</li>
                    <li>Respond to legal process or government requests</li>
                    <li>Protect our rights and property</li>
                    <li>Ensure the safety of individuals</li>
                  </ul>
                </article>
              )}

              {/* Section 5 */}
              {isMatch("5. Data Security Technical Safeguards Administrative Safeguards Physical Safeguards encryption firewalls monitoring authentication employee training policies audits breach facilities access controls media disposal") && (
                <article id="security" className="legal-card reveal">
                  <h2>5. Data Security</h2>
                  <p>We implement comprehensive security measures to protect your information:</p>

                  <h3>Technical Safeguards</h3>
                  <ul>
                    <li>Encryption of data in transit and at rest</li>
                    <li>Secure network infrastructure and firewalls</li>
                    <li>Regular security monitoring and updates</li>
                    <li>Access controls and authentication systems</li>
                  </ul>

                  <h3>Administrative Safeguards</h3>
                  <ul>
                    <li>Employee training on privacy and security</li>
                    <li>Written policies and procedures</li>
                    <li>Regular risk assessments and audits</li>
                    <li>Incident response and breach notification procedures</li>
                  </ul>

                  <h3>Physical Safeguards</h3>
                  <ul>
                    <li>Secure facilities with controlled access</li>
                    <li>Protection of computer systems and media</li>
                    <li>Secure disposal of sensitive information</li>
                    <li>Environmental controls and monitoring</li>
                  </ul>
                </article>
              )}

              {/* Section 6 */}
              {isMatch("6. Your Privacy Rights Access Correction Restrictions Communications California Privacy Rights CCPA PHI protected health information delete opt-out non-discrimination") && (
                <article id="rights" className="legal-card reveal">
                  <h2>6. Your Privacy Rights</h2>
                  <p>Under HIPAA and applicable privacy laws, you have the right to:</p>

                  <h3>Access and Correction</h3>
                  <ul>
                    <li>Request access to your protected health information</li>
                    <li>Request corrections to inaccurate information</li>
                    <li>Receive a copy of this Privacy Policy</li>
                  </ul>

                  <h3>Restrictions and Communications</h3>
                  <ul>
                    <li>Request restrictions on use and disclosure of PHI</li>
                    <li>Request confidential communications</li>
                    <li>File complaints regarding privacy practices</li>
                  </ul>

                  <div className="legal-callout">
                    <h4>California Consumer Privacy Act (CCPA) Rights</h4>
                    <p>
                      If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA), including:
                    </p>
                    <ul style={{ marginTop: 10 }}>
                      <li>Right to know what personal information we collect</li>
                      <li>Right to delete personal information</li>
                      <li>Right to opt-out of sale of personal information</li>
                      <li>Right to non-discrimination for exercising privacy rights</li>
                    </ul>
                  </div>
                </article>
              )}

              {/* Section 7 */}
              {isMatch("7. Cookies and Tracking Technologies preferences traffic performance content advertisements security browser functionality") && (
                <article id="cookies" className="legal-card reveal">
                  <h2>7. Cookies and Tracking Technologies</h2>
                  <p>Our website uses cookies and similar technologies to:</p>
                  <ul>
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and performance</li>
                    <li>Provide personalized content and advertisements</li>
                    <li>Ensure website security and functionality</li>
                  </ul>
                  <p>
                    You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality.
                  </p>
                </article>
              )}

              {/* Section 8 */}
              {isMatch("8. Third-Party Links external websites privacy practices policies encouraged review") && (
                <article id="third-party" className="legal-card reveal">
                  <h2>8. Third-Party Links</h2>
                  <p>
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
                  </p>
                </article>
              )}

              {/* Section 9 */}
              {isMatch("9. Children's Privacy dental professionals adult patients 13 years age delete") && (
                <article id="children" className="legal-card reveal">
                  <h2>9. Children&apos;s Privacy</h2>
                  <p>
                    Our services are intended for dental professionals and adult patients. We do not knowingly collect personal information from children under 13 years of age. If we become aware that we have collected information from a child under 13, we will take steps to delete such information.
                  </p>
                </article>
              )}

              {/* Section 10 */}
              {isMatch("10. International Data Transfers United States service providers operate safeguards") && (
                <article id="transfers" className="legal-card reveal">
                  <h2>10. International Data Transfers</h2>
                  <p>
                    Your information may be transferred to and processed in the United States or other countries where we or our service providers operate. We ensure appropriate safeguards are in place for international transfers.
                  </p>
                </article>
              )}

              {/* Section 11 */}
              {isMatch("11. Data Retention services contractual legal regulatory disputes HIPAA state laws") && (
                <article id="retention" className="legal-card reveal">
                  <h2>11. Data Retention</h2>
                  <p>We retain personal information for as long as necessary to:</p>
                  <ul>
                    <li>Provide our services and fulfill contractual obligations</li>
                    <li>Comply with legal and regulatory requirements</li>
                    <li>Resolve disputes and enforce agreements</li>
                    <li>Support business operations and records management</li>
                  </ul>
                  <p>
                    For protected health information, we follow HIPAA retention requirements and applicable state laws.
                  </p>
                </article>
              )}

              {/* Section 12 */}
              {isMatch("12. Changes to This Privacy Policy update reflect practices website email registered users notice law") && (
                <article id="changes" className="legal-card reveal">
                  <h2>12. Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. We will notify you of material changes by:
                  </p>
                  <ul>
                    <li>Posting the updated policy on our website</li>
                    <li>Sending email notifications to registered users</li>
                    <li>Providing notice as required by law</li>
                  </ul>
                </article>
              )}

              {/* Section 13 */}
              {isMatch("13. Contact Information Privacy Officer Jeton Zajmi HIPAA complaints US Department Health Human Services Office Civil Rights HHS") && (
                <article id="contact" className="legal-card reveal">
                  <h2>13. Contact Information &amp; Privacy Officer</h2>
                  <p>If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:</p>

                  <div className="legal-callout">
                    <h4>Laguna Dental Arts</h4>
                    <p style={{ marginTop: 8 }}>
                      <strong>Email:</strong> <a href="mailto:dev@lagunadentalarts.com" style={{ color: "var(--blue)" }}>dev@lagunadentalarts.com</a><br />
                      <strong>Phone:</strong> <a href="tel:+19166881333" style={{ color: "var(--blue)" }}>(916) 688-1333</a><br />
                      <strong>Address:</strong> 9152 Elkmont Way, Elk Grove, CA 95624
                    </p>
                    <hr style={{ margin: "14px 0", borderColor: "rgba(59,157,255,0.2)" }} />
                    <p>
                      <strong>Privacy Officer:</strong> Jeton Zajmi<br />
                      <strong>Privacy Email:</strong> <a href="mailto:jzajmi@lagunadentalarts.com" style={{ color: "var(--blue)" }}>jzajmi@lagunadentalarts.com</a>
                    </p>
                  </div>

                  <div className="legal-callout" style={{ background: "#fff9f0", borderLeftColor: "#f5a623" }}>
                    <h4 style={{ color: "#8a5800" }}>HIPAA-Related Complaints</h4>
                    <p style={{ color: "#664300" }}>
                      For HIPAA-related complaints, you may also contact:<br />
                      <strong>U.S. Department of Health and Human Services — Office for Civil Rights</strong><br />
                      Website: <a href="https://www.hhs.gov/ocr/privacy/" target="_blank" rel="noopener noreferrer" style={{ color: "#d97706", textDecoration: "underline" }}>www.hhs.gov/ocr/privacy/</a>
                    </p>
                  </div>

                  <p style={{ fontSize: "0.88rem", color: "var(--ink-faint)", marginTop: 14 }}>
                    This Privacy Policy is designed to comply with HIPAA, CCPA, and other applicable privacy laws. It should be reviewed by legal counsel to ensure compliance with all applicable requirements.
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
