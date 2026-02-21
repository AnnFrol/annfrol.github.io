import React from "react";
import { Link } from "react-router-dom";
import "./css/support.css";
import AnimatedText from "./AnimatedText";
import { ROUTES, APP_STORE, CHOOSERIGHT_PRIVACY_URL } from "./constants";
import appYolkstimer from "./assets/img/AppYolkstimer.png";
import appChooseRight from "./assets/img/AppChooseRight.png";
import iconYolkstimer from "./assets/img/AppYolkstimer.png";
import iconChooseRight from "./assets/img/appIcon-choiceright.png";

function DocIcon() {
  return (
    <svg className="support-card-doc-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M9 1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5L9 1Z" fill="currentColor" />
      <path d="M9 1v4h4" stroke="rgba(255,255,255,0.35)" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const APPS = [
  {
    id: "yolks-timer",
    name: "Yolks Timer",
    description: "iOS/Watch multi-step cooking timer with Live Activity, widget & PRO subscription.",
    icon: iconYolkstimer,
    iconAlt: "Yolks Timer app icon",
    links: [
      { label: "Support", href: "mailto:support@annfro.com" },
    ],
  },
  {
    id: "choose-right",
    name: "Choose Right",
    description: "Applications for iPhones to help users make a choice from a variety of options.",
    icon: iconChooseRight,
    iconAlt: "Choose Right app icon",
    links: [
      { label: "Learn more", to: ROUTES.CHOOSERIGHT },
      { label: "App Store", href: APP_STORE.CHOOSERIGHT },
      { label: "Privacy policy", href: CHOOSERIGHT_PRIVACY_URL },
      { label: "Support", href: "mailto:support@annfro.com" },
    ],
  },
];

function Support() {
  return (
    <div className="support-page">
      <div className="support-h1">
        <AnimatedText page="support" title="Support" />
      </div>

      <div className="support-content">
        <section className="support-section">
          <h2 className="support-section-title">My apps</h2>
          <div className="support-cards">
            {APPS.map((app) => (
              <article key={app.id} className="support-card">
                <div className="support-card-icon">
                  <img src={app.icon} alt={app.iconAlt} />
                </div>
                <h3 className="support-card-title">{app.name}</h3>
                <ul className="support-card-links">
                  {app.links.map((item) => (
                    <li key={item.label}>
                      <DocIcon />
                      {item.to != null ? (
                        <Link to={item.to} className="support-card-link">
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="support-card-link"
                          {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="support-section support-contact">
          <h2 className="support-section-title">Contact</h2>
          <p className="support-text">
            For questions, feedback or support about any of my apps, please write to:
          </p>
          <a href="mailto:support@annfro.com" className="support-email">
            support@annfro.com
          </a>
        </section>
      </div>
    </div>
  );
}

export default Support;
