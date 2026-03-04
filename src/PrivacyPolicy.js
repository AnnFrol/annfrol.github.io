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
          <p className="privacy-last-updated">Last Updated: March 4, 2026</p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">1. Introduction</h3>
          <p className="privacy-text">
            Welcome to ChooseRight!. ChooseRight! is a mobile application for iOS designed to help you make decisions without stress. The app allows you to create comparisons between options, add evaluation criteria (attributes), and rate each option. The application calculates relevance and helps you choose the optimal option. An optional AI assistant can help you create comparison structure from a short description.
          </p>
          <p className="privacy-text">
            We are committed to protecting your privacy. This Privacy Policy explains how we handle your information when you use ChooseRight!. Your comparison data is stored locally on your device. When you use the AI assistant features, only the text or data you provide for those features is sent to an AI provider (see Section 2 and 7) to provide the service. The app chooses the provider automatically based on your device's region setting (country/region only; we do not use precise location).
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
            If you use the optional AI assistant (e.g. to create a comparison from a phrase like "compare iPhone and Samsung"), the <strong>text you type</strong> for that request is sent to the AI provider so we can return suggested items and attributes. <strong>Generate values:</strong> If you use "Generate values" to fill the table with +/-, the <strong>names of the items and criteria (attributes)</strong> in that comparison are sent to the AI provider. We do not store this data on our servers. The provider processes it according to their privacy practices; we use it only to power these features. The provider may be <strong>Groq</strong> (<a href="https://groq.com" target="_blank" rel="noopener noreferrer" className="privacy-link">https://groq.com</a>) for most regions, or <strong>OpenRouter</strong> (<a href="https://openrouter.ai" target="_blank" rel="noopener noreferrer" className="privacy-link">https://openrouter.ai</a>) for users in Russia and Belarus.
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
            When you use the AI assistant (creating a comparison from text or "Generate values"), we send only the relevant text or item/attribute names to the AI provider's API (Groq or OpenRouter, depending on your device region). We do not use this data for advertising, analytics, or tracking. We do not retain it on our systems.
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
            <li>It is not transmitted over the internet except when you use the AI assistant (only the text or item/attribute names you provide for that feature).</li>
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
            <strong>AI providers (Groq and OpenRouter):</strong><br />
            When you use the AI assistant (creating a comparison from text or "Generate values"), the relevant text or item/attribute names are sent to an AI provider's API. The app chooses the provider automatically by your device's region (country/region code only):
          </p>
          <ul className="privacy-list">
            <li><strong>Groq</strong> (<a href="https://groq.com" target="_blank" rel="noopener noreferrer" className="privacy-link">https://groq.com</a>) is used in most regions. Their privacy policy: <a href="https://groq.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="privacy-link">https://groq.com/privacy-policy</a> (or the current policy at groq.com).</li>
            <li><strong>OpenRouter</strong> (<a href="https://openrouter.ai" target="_blank" rel="noopener noreferrer" className="privacy-link">https://openrouter.ai</a>) is used for users in Russia and Belarus. Their privacy policy applies to that processing: <a href="https://openrouter.ai/privacy" target="_blank" rel="noopener noreferrer" className="privacy-link">https://openrouter.ai/privacy</a> (or the current policy at openrouter.ai).</li>
          </ul>
          <p className="privacy-text">
            We do not control these providers' processing; their respective privacy policies apply.
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
            <li>We do not hold your comparison data on our servers, so there is nothing to request from us regarding that data. Data sent to the AI provider (request text or item/attribute names) is not stored by us.</li>
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
            <li>The app works <strong>offline</strong> for comparisons; <strong>online</strong> use is only for the optional <strong>AI assistant</strong> (create from text or "Generate values"), when the relevant text or item/attribute names are sent to an <strong>AI provider</strong> (Groq in most regions, OpenRouter in Russia and Belarus) to generate suggestions.</li>
            <li>The app uses your device's <strong>region setting</strong> (country/region only) to choose which AI provider to use; we do not use or send precise location.</li>
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
