"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@/components/icons/Icon";

export type TeamMember = {
  name: string;
  mark: string;
  role: string;
  image: string;
  objectPosition?: string;
  bio?: string[];
  specialties?: string[];
};

export const TEAM: TeamMember[] = [
  {
    name: "Jeton Zajmi",
    mark: "JZ",
    role: "President",
    image: "/images/team/Jeton.jpg",
    bio: [
      "With 27 years of experience in the dental industry and a background as a Dental Technologist, Jeton Zajmi brings extensive technical, operational, and leadership experience to Laguna Dental Arts.",
      "Throughout his career, he has held leadership roles with major dental companies, leading multiple locations, developing digital workflows, supporting new technology and product launches, and driving operational improvements.",
      "As President of Laguna Dental Arts, Jeton is focused on innovation, quality, strong teams, and building lasting partnerships with dental professionals.",
    ],
    specialties: [
      "Dental Technologist",
      "Digital Workflows",
      "Operational Leadership",
      "Product & Tech Innovation",
    ],
  },
  {
    name: "Joey Kong",
    mark: "JK",
    role: "General Manager | Restorative & Fixed",
    image: "/images/team/Joey.jpg",
    bio: [
      "Nearly 13 years with Laguna Dental Arts",
      "Extensive expertise in digital restorative dentistry, implant restorations, and All-on-X cases",
      "Combines strong technical knowledge with hands-on leadership across the restorative and fixed departments",
      "Passionate about quality, precision, digital workflows, and delivering consistent results for our doctors and their patients",
    ],
    specialties: [
      "3shape / Exocad certified, CadCam",
      "Treatment Plan Coordinator",
      "Implants Specialist",
      "Full Arch Consultant",
      "Diagnostics Wax-up",
      "Quality Control",
    ],
  },
  {
    name: "Julian Inthavongxay",
    mark: "JI",
    role: "Removable & Ortho Manager",
    image: "/images/team/Julian.jpg",
    bio: [
      "13 years with Laguna Dental Arts",
      "Leads our Removable and Orthodontic departments",
      "Brings extensive experience in removable prosthetics, orthodontic appliances, and laboratory workflows",
      "Known for his technical knowledge, consistency, and commitment to quality and dependable results",
      "Works closely with his team to ensure every case receives the attention and craftsmanship it deserves",
    ],
    specialties: [
      "Removable Prosthetics",
      "Orthodontic Appliances",
      "Lab Workflows & Quality",
    ],
  },
  {
    name: "Cheer Cha",
    mark: "CC",
    role: "Staining & Glaze Manager",
    image: "/images/team/Cheer.jpg",
    bio: [
      "Nearly 15 years with Laguna Dental Arts",
      "Specializes in custom shading, artistic staining, glazing, and highly detailed esthetic work",
      "Known for her exceptional eye for color, texture, and natural tooth characterization",
      "Skilled at translating doctor requests and reference images into restorations that blend naturally with the patient’s smile",
      "Brings artistry, precision, and a steady hand to every restoration",
    ],
    specialties: [
      "Custom Shading",
      "Artistic Staining & Glazing",
      "Esthetic Restorations",
    ],
  },
  {
    name: "Steve Dutra",
    mark: "SD",
    role: "Chairside & All-on-X Specialist",
    image: "/images/team/Steve.jpg",
    objectPosition: "center top",
    bio: [
      "30 years of experience in the dental laboratory industry",
      "Specializes in chairside support, All-on-X/full-arch cases, and complex implant workflows",
      "Brings extensive experience in removable prosthetics and comprehensive restorative cases",
      "Known for his hands-on approach, technical expertise, and ability to support doctors through demanding chairside procedures",
      "Focused on helping create a smooth experience for the doctor, the laboratory, and most importantly, the patient",
    ],
    specialties: [
      "Chairside Support",
      "All-on-X / Full-Arch",
      "Complex Implant Workflows",
      "Removable Prosthetics",
    ],
  },
  {
    name: "Sheila Reis",
    mark: "SR",
    role: "Business Development & Sales Manager",
    image: "/images/team/Sheila.jpg",
    bio: [
      "18 years of experience in the dental industry",
      "Specializes in business development, customer relationships, and practice support",
      "Brings a deep understanding of the dental industry and what practices need from their laboratory partner",
      "Passionate about building long-term relationships, supporting doctors, and creating opportunities for mutual growth",
      "Serves as an important connection between our customers and the Laguna Dental Arts team",
    ],
    specialties: [
      "Business Development",
      "Customer Relationships",
      "Practice Support",
    ],
  },
  {
    name: "DeAnna Marie Mendez",
    mark: "DM",
    role: "Treatment Plan Coordinator",
    image: "/images/team/DeAnna.jpg",
    objectPosition: "center top",
    bio: [
      "25 years of Dental Management/ Treatment Coordinating/ Health Administrative Management with hands-on experience in an office setting. My passion, knowledge, willingness, and all-around superb communication will be a great asset to build meaningful connections for my future endeavors here at Laguna Dental Arts.",
    ],
    specialties: [
      "Treatment Coordinating",
      "Dental Management",
      "Health Administrative Management",
    ],
  },
];

export function TeamGrid() {
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMember(null);
      }
    };

    if (activeMember) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeMember]);

  return (
    <>
      <div className="team-grid reveal">
        {TEAM.map((t) => {
          const hasBio = Boolean(t.bio && t.bio.length > 0);
          return (
            <article
              key={t.name}
              className={`card team-card${hasBio ? " team-card--has-bio" : ""}`}
              onClick={hasBio ? () => setActiveMember(t) : undefined}
              tabIndex={hasBio ? 0 : undefined}
              role={hasBio ? "button" : undefined}
              aria-haspopup={hasBio ? "dialog" : undefined}
              aria-label={hasBio ? `View bio for ${t.name}` : undefined}
              onKeyDown={
                hasBio
                  ? (e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveMember(t);
                      }
                    }
                  : undefined
              }
            >
              <div className="team-card__portrait">
                {/* <span className="team-card__mark">{t.mark}</span> */}
                <Image
                  src={t.image}
                  alt={t.name}
                  width={400}
                  height={400}
                  style={{
                    objectFit: "cover",
                    ...(t.objectPosition ? { objectPosition: t.objectPosition } : {}),
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className="team-card__body">
                <h3>{t.name}</h3>
                <div className="team-card__role">{t.role}</div>
                {hasBio && (
                  <div className="team-card__bio-trigger">
                    <span>View Bio</span>
                    <Icon name="arrow" size={13} strokeWidth={2.4} />
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {activeMember && (
        <div
          className="bio-modal-backdrop"
          onClick={() => setActiveMember(null)}
          aria-hidden="true"
        >
          <div
            className="bio-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="bio-modal-name"
          >
            <button
              type="button"
              className="bio-modal__close"
              onClick={() => setActiveMember(null)}
              aria-label="Close bio modal"
            >
              <Icon name="close" size={18} strokeWidth={2.4} />
            </button>

            <div className="bio-modal__header">
              <div className="bio-modal__portrait">
                {/* <span className="team-card__mark">{activeMember.mark}</span> */}
                <Image
                  src={activeMember.image}
                  alt={activeMember.name}
                  width={240}
                  height={240}
                  style={{
                    objectFit: "cover",
                    ...(activeMember.objectPosition ? { objectPosition: activeMember.objectPosition } : {}),
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div className="bio-modal__info">
                <span className="bio-modal__role">{activeMember.role}</span>
                <h3 id="bio-modal-name">{activeMember.name}</h3>
              </div>
            </div>

            <div className="bio-modal__body">
              <div className="bio-modal__bio">
                {activeMember.bio?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {activeMember.specialties && activeMember.specialties.length > 0 && (
                <div className="bio-modal__specialties">
                  <div className="bio-modal__specialties-title">
                    Specialties & Certifications
                  </div>
                  <div className="bio-modal__tags">
                    {activeMember.specialties.map((spec, i) => (
                      <span key={i} className="bio-modal__tag">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
