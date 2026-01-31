import React from "react";
import "./css/privacy.css";
import AnimatedText from "./AnimatedText";
import { getEmail, openEmailClient } from "./utils/email";
import { Link } from "react-router-dom";
import { ROUTES } from "./constants";

function WebsitePrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <div className="privacy-h1">
        <AnimatedText page="website-privacy" title="Website Privacy Policy" />
      </div>

      <div className="privacy-content">
        <div className="privacy-section">
          <h2 className="privacy-section-title">Privacy Policy for annfro.com (This Website)</h2>
          <p className="privacy-last-updated">Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">1. Introduction</h3>
          <p className="privacy-text">
            This Privacy Policy applies to this website (annfro.com and related pages hosted on GitHub Pages). The website is operated by <strong>IE Froltsova (Individual Entrepreneur Froltsova), Kazakhstan</strong>. It describes how we handle information when you visit this portfolio and contact site. We do not collect personal data through forms or registration on this website.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">2. Information We Do Not Collect on This Website</h3>
          <p className="privacy-text">
            <strong>This website does not use registration forms, contact forms that submit to our servers, or analytics/tracking scripts.</strong> We do not collect your name, email, or other personal data through this site. Contact is only possible via your own email client (see below).
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">3. Contact and Email</h3>
          <p className="privacy-text">
            The site provides contact options that work without sending your data to our servers:
          </p>
          <ul className="privacy-list">
            <li>
              <strong>Email link (mailto):</strong> Clicking the contact button opens your default email client with a pre-filled recipient and optional subject. Your message is sent from your email provider; we do not store it on this website.
            </li>
            <li>
              <strong>Copy email:</strong> You can copy the email address to your clipboard. This uses your browser’s clipboard API; we do not receive or store the copied content.
            </li>
          </ul>
          <p className="privacy-text">
            Any correspondence you send to the published email address is handled by your and our email providers according to their respective privacy policies.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">4. Hosting and Server Logs</h3>
          <p className="privacy-text">
            This website is hosted on <strong>GitHub Pages</strong>. When you visit, GitHub may collect technical data such as IP address, browser type, and access logs in accordance with{" "}
            <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer" className="privacy-link">
              GitHub’s Privacy Statement
            </a>
            . We do not have access to or control over that data. We do not use this site to log or store visitor information ourselves.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">5. Cookies and Local Storage</h3>
          <p className="privacy-text">
            This website does not set cookies or use local storage for tracking or advertising. If we introduce optional cookies (for example, for preferences or analytics) in the future, we will update this policy and, where required by law, ask for your consent.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">6. Third-Party Links</h3>
          <p className="privacy-text">
            The site may link to external sites (e.g. social networks, App Store, other portfolios). Those sites have their own privacy policies and data practices. We are not responsible for their handling of your data.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">7. Your Rights</h3>
          <p className="privacy-text">
            Because we do not collect personal data through this website, there is no account or profile to access or delete on our side. If you have questions about data held by our hosting provider (GitHub), please refer to GitHub’s privacy documentation. For questions about this policy or our practices, you can contact us at the email below.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">8. Changes to This Policy</h3>
          <p className="privacy-text">
            We may update this Website Privacy Policy from time to time. The “Last Updated” date at the top will be revised when we do. We encourage you to review this page periodically.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">9. Contact</h3>
          <p className="privacy-text">
            Operator: <strong>IE Froltsova (Individual Entrepreneur Froltsova), Kazakhstan</strong>.
          </p>
          <p className="privacy-text">
            For questions about this Website Privacy Policy or about how we handle data in relation to this site, you can reach us at:
          </p>
          <p className="privacy-contact">
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${getEmail()}?subject=Website Privacy Policy Inquiry`}
              onClick={(e) => {
                e.preventDefault();
                openEmailClient("Website Privacy Policy Inquiry");
              }}
              className="privacy-link"
            >
              {getEmail()}
            </a>
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">10. Other Policies</h3>
          <p className="privacy-text">
            If you are interested in the privacy practices of our mobile app ChooseRight!, please see the separate{" "}
            <Link to={ROUTES.PRIVACY} className="privacy-link">
              ChooseRight! Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default WebsitePrivacyPolicy;
