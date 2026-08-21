"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@/components/icons/Icon";

export type TeamMember = {
  name: string;
  mark: string;
  role: string;
  image: string;
  bio?: string[];
  specialties?: string[];
};

export const TEAM: TeamMember[] = [
  {
    name: "Jeton Zajmi",
    mark: "JZ",
    role: "President",
    image: "/images/team/Jeton.jpg",
  },
  {
    name: "Joey Kong",
    mark: "JK",
    role: "General Manager",
    image: "/images/team/Joey.jpg",
    bio: [
      "I’ve been with Laguna Dental Arts for 12 years. My strength comes from the Digital aspect of the dental world, digital designs to digital software. Every case we touch, we are ready to make an impact on the patient. Starting from single crowns to a full mouth smile, we are prepared to make it happen. I love to make people smile. I encounter day-to-day communication with Doctors/staff member to educate them on different restorations to strive for better results. Being a General Manager has encouraged me to",
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
    name: "DeAnna Marie Mendez",
    mark: "DM",
    role: "Treatment Plan Coordinator",
    image: "/images/team/DeAnna.jpg",
    bio: [
      "I have 25 years of Dental Management/ Treatment Coordinating/ Health Administrative Management with hands-on experience in an office setting. My passion, knowledge, willingness, and all-around superb communication will be a great asset to build meaningful connections for my future endeavors here at Laguna Dental Arts.",
    ],
  },
  {
    name: "Sheila Reis",
    mark: "SR",
    role: "Business Development",
    image: "/images/team/Sheila.jpg",
  },
  {
    name: "Julian Inthvongxay",
    mark: "JI",
    role: "Removable Manager",
    image: "/images/team/Julian.jpg",
    bio: [
      "I’m the removables department manager",
      "I’ve been with the company for 12 years now.",
    ],
  },
  {
    name: "Cheer Cha",
    mark: "CC",
    role: "Aesthetic Finishing Manager",
    image: "/images/team/Cheer.jpg",
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
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
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
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
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
