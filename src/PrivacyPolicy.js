import React from "react";
import "./css/privacy.css";
import AnimatedText from "./AnimatedText";
import { getEmail, openEmailClient } from "./utils/email";

function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <div className="privacy-h1">
        <AnimatedText page="privacy" title="Privacy Policy" />
      </div>

      <div className="privacy-content">
        <div className="privacy-section">
          <h2 className="privacy-section-title">ChooseRight! Privacy Policy</h2>
          <p className="privacy-last-updated">Last Updated: February 21, 2026</p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">1. Introduction</h3>
          <p className="privacy-text">
            Welcome to ChooseRight!. ChooseRight! is a mobile application for iOS designed to help you make decisions without stress. The app allows you to create comparisons between options, add evaluation criteria (attributes), and rate each option. The application calculates relevance and helps you choose the optimal option. An optional AI assistant can help you create comparison structure from a short description.
          </p>
          <p className="privacy-text">
            We are committed to protecting your privacy. This Privacy Policy explains how we handle your information when you use ChooseRight!. Your comparison data is stored locally on your device. When you use the AI assistant feature, only the text you enter for that feature is sent to our AI provider to provide the service.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">2. Information We Collect</h3>
          <p className="privacy-text">
            <strong>Data stored only on your device (we do not collect or access this):</strong>
          </p>
          <p className="privacy-text">
            All comparison-related data is stored locally on your device using the iOS Core Data framework. We do not have access to it, and it is not transmitted to our servers:
          </p>
          <ul className="privacy-list">
            <li><strong>Comparisons:</strong> Comparisons you create between different options</li>
            <li><strong>Elements:</strong> Items you add for comparison</li>
            <li><strong>Criteria (Attributes):</strong> Evaluation criteria you configure</li>
            <li><strong>Ratings:</strong> Your ratings and evaluations of elements</li>
            <li><strong>App preferences:</strong> Your app settings, including theme (dark/light mode)</li>
          </ul>
          <p className="privacy-text">
            <strong>Data processed when you use the AI assistant:</strong>
          </p>
          <p className="privacy-text">
            If you use the optional AI assistant (e.g. to create a comparison from a phrase like "compare iPhone and Samsung"), the <strong>text you type</strong> for that request is sent to our AI provider <strong>Groq</strong> (<a href="https://groq.com" target="_blank" rel="noopener noreferrer" className="privacy-link">https://groq.com</a>) so we can return suggested items and attributes. We do not store this text on our servers. Groq processes it according to their privacy practices. We use this only to power the AI feature.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">3. How We Use Your Information</h3>
          <p className="privacy-text">
            <strong>Local data:</strong><br />
            All comparison data is processed only on your device. Relevance scores are calculated locally. No comparison content is sent to our or third-party servers.
          </p>
          <p className="privacy-text">
            <strong>AI assistant:</strong><br />
            When you use the AI assistant, we send only the request text you enter to Groq's API to generate comparison structure. We do not use this data for advertising, analytics, or tracking. We do not retain it on our systems.
          </p>
          <ul className="privacy-list">
            <li>No analytics, tracking, or advertising services are used for your comparison data.</li>
            <li>The app works <strong>offline</strong> for creating, editing, and viewing comparisons. <strong>Online use</strong> is limited to the optional AI assistant feature when you choose to use it.</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">4. Data Storage and Security</h3>
          <ul className="privacy-list">
            <li>Your comparison data is stored only on your device (iOS Core Data, in the app's sandbox).</li>
            <li>It is not transmitted over the internet except when you use the AI assistant (only the text of that request).</li>
            <li>You can export data as <strong>PDF</strong> or <strong>.chooseright</strong> files and manage or delete data at any time.</li>
            <li>We recommend using iOS security (passcode, Face ID, Touch ID) to protect your device.</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">5. File Access and Permissions</h3>
          <p className="privacy-text">
            ChooseRight! may use file access only with your explicit consent via iOS:
          </p>
          <ul className="privacy-list">
            <li><strong>PDF export:</strong> You choose where to save the file via system dialogs.</li>
            <li><strong>Import/Export (.chooseright):</strong> You initiate import or export; the app does not have permanent access to your file system.</li>
            <li>All file operations are temporary and require your action through iOS.</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">6. Permissions We Do Not Request</h3>
          <p className="privacy-text">
            ChooseRight! does not request access to:
          </p>
          <ul className="privacy-list">
            <li>Camera</li>
            <li>Microphone</li>
            <li>Location</li>
            <li>Contacts</li>
            <li>Photos library</li>
            <li>Calendar</li>
            <li>Push notifications</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">7. Third-Party Services</h3>
          <p className="privacy-text">
            <strong>Groq (AI assistant):</strong><br />
            When you use the AI assistant, your request text is sent to Groq's API. Their privacy policy applies to that processing: <a href="https://groq.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="privacy-link">https://groq.com/privacy-policy</a> (or their current policy at groq.com).
          </p>
          <p className="privacy-text">
            <strong>Apple:</strong><br />
            Downloads and in-app purchases are subject to Apple's privacy policy. We do not receive your personal information from Apple for those transactions.
          </p>
          <p className="privacy-text">
            <strong>No other third-party analytics, tracking, or advertising</strong> are used for your comparison data.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">8. Your Rights and Data Control</h3>
          <ul className="privacy-list">
            <li><strong>Access, edit, delete:</strong> All comparison data is in the app on your device; you can view, edit, or delete it at any time.</li>
            <li><strong>Export:</strong> You can export data as PDF or .chooseright at any time.</li>
            <li><strong>Uninstall:</strong> Removing the app deletes all local data.</li>
            <li>We do not hold your comparison data on our servers, so there is nothing to request from us regarding that data. AI request text is not stored by us.</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">9. Children's Privacy</h3>
          <p className="privacy-text">
            ChooseRight! is not directed at children under 13. We do not knowingly collect personal information. Comparison data is stored only on the device; parents should be aware that children can create and store comparisons on their device.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">10. Changes to This Privacy Policy</h3>
          <p className="privacy-text">
            We may update this policy. We will post the new version on this page and update the "Last Updated" date. Please review it periodically.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">11. Contact Us</h3>
          <p className="privacy-text">
            If you have questions about this Privacy Policy or our practices:
          </p>
          <p className="privacy-contact">
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${getEmail()}?subject=Privacy Policy Inquiry - ChooseRight!`}
              onClick={(e) => {
                e.preventDefault();
                openEmailClient("Privacy Policy Inquiry - ChooseRight!");
              }}
              className="privacy-link"
            >
              {getEmail()}
            </a>
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">12. Summary</h3>
          <ul className="privacy-list">
            <li>Comparison data is stored <strong>only on your device</strong> (Core Data); we do not collect or access it.</li>
            <li>The app works <strong>offline</strong> for comparisons; <strong>online</strong> use is only for the optional <strong>AI assistant</strong>, when the text you enter is sent to <strong>Groq</strong> to generate suggestions.</li>
            <li>We do not use analytics, tracking, or advertising on your comparison data.</li>
            <li>File access happens only through iOS dialogs with your consent.</li>
            <li>We do not request camera, microphone, location, contacts, or similar permissions.</li>
            <li>You control your data: export, delete, or manage it in the app.</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">13. Consent</h3>
          <p className="privacy-text">
            By using ChooseRight!, you agree to this Privacy Policy. If you do not agree, please do not use the application.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
