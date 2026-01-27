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
          <p className="privacy-last-updated">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">1. Introduction</h3>
          <p className="privacy-text">
            Welcome to ChooseRight!. ChooseRight! is a mobile application for iOS designed to help you make decisions without stress. The app allows users to create comparisons between options, add evaluation criteria (attributes), and rate each option. The application calculates relevance and helps you choose the optimal option.
          </p>
          <p className="privacy-text">
            We are committed to protecting your privacy. This Privacy Policy explains how we handle your information when you use ChooseRight!. The most important thing to know is that <strong>all your data is stored locally on your device</strong>, and we do not collect, transmit, or have access to your personal information.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">2. Information We Collect</h3>
          <p className="privacy-text">
            <strong>ChooseRight! does not collect any personal information.</strong> All data created within the application is stored locally on your device using iOS Core Data framework. We do not have access to your data, and it is never transmitted to external servers.
          </p>
          <p className="privacy-text">
            The application stores the following information locally on your device:
          </p>
          <ul className="privacy-list">
            <li>
              <strong>Comparisons:</strong> Comparisons you create between different options
            </li>
            <li>
              <strong>Elements:</strong> Items you add for comparison
            </li>
            <li>
              <strong>Criteria (Attributes):</strong> Evaluation criteria you configure
            </li>
            <li>
              <strong>Ratings:</strong> Your ratings and evaluations of elements
            </li>
            <li>
              <strong>App Preferences:</strong> Your app settings, including theme preferences (dark/light mode)
            </li>
          </ul>
          <p className="privacy-text">
            <strong>Important:</strong> All this data remains on your device. We do not collect, access, or transmit any of this information.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">3. How We Use Your Information</h3>
          <p className="privacy-text">
            Since we do not collect any information, we do not use your data in any way. All data processing happens locally on your device:
          </p>
          <ul className="privacy-list">
            <li>Your comparisons and ratings are processed locally to calculate relevance scores</li>
            <li>Data is stored using iOS Core Data framework on your device</li>
            <li>No data is sent to external servers or third-party services</li>
            <li>No analytics, tracking, or advertising services are used</li>
          </ul>
          <p className="privacy-text">
            The application works completely offline, and all your data remains on your device.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">4. Data Storage and Security</h3>
          <p className="privacy-text">
            <strong>All your data is stored exclusively on your device</strong> using iOS Core Data framework. This means:
          </p>
          <ul className="privacy-list">
            <li>Your data never leaves your device</li>
            <li>Data is stored in the app's sandboxed container, protected by iOS security mechanisms</li>
            <li>No data is transmitted over the internet</li>
            <li>You have full control over your data - you can export it, delete it, or manage it as you wish</li>
          </ul>
          <p className="privacy-text">
            You can export your data in the following formats:
          </p>
          <ul className="privacy-list">
            <li><strong>PDF documents:</strong> Export comparisons as PDF files</li>
            <li><strong>.chooseright files:</strong> Export your data in the app's native format for backup or transfer</li>
          </ul>
          <p className="privacy-text">
            Since all data is stored locally, the security of your device is the primary factor in protecting your information. We recommend using standard iOS security features such as device passcodes, Face ID, or Touch ID.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">5. File Access and Permissions</h3>
          <p className="privacy-text">
            ChooseRight! may request access to files through iOS system dialogs, but only with your explicit consent:
          </p>
          <ul className="privacy-list">
            <li>
              <strong>PDF Export:</strong> When you export a comparison as PDF, the app uses iOS system dialogs to let you choose where to save the file. The app does not have permanent access to your file system.
            </li>
            <li>
              <strong>Import/Export Files:</strong> You can import comparison files (.chooseright) or export your data through iOS system sharing dialogs. All file operations are initiated by you and require your explicit permission through iOS system dialogs.
            </li>
            <li>
              <strong>No Permanent Access:</strong> The app does not have permanent access to your device's file system. All file operations are temporary and require your action through iOS system interfaces.
            </li>
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
            <li>Location services (GPS)</li>
            <li>Contacts</li>
            <li>Photos library</li>
            <li>Calendar</li>
            <li>Push notifications or local notifications</li>
          </ul>
          <p className="privacy-text">
            The app uses only standard iOS system functions for file operations and data sharing, all of which require your explicit consent through iOS system dialogs.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">7. Third-Party Services</h3>
          <p className="privacy-text">
            ChooseRight! does not use any third-party analytics, tracking, or advertising services. The app works completely offline and does not integrate with external services.
          </p>
          <ul className="privacy-list">
            <li>
              <strong>Apple App Store:</strong> When you download ChooseRight! from the App Store, Apple's privacy policy applies to your download and purchase. We do not receive any personal information from Apple.
            </li>
            <li>
              <strong>iOS System Services:</strong> The app uses standard iOS frameworks (Core Data, File System APIs) that are part of the operating system. These do not transmit data to external servers.
            </li>
          </ul>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">8. Your Rights and Data Control</h3>
          <p className="privacy-text">
            Since all your data is stored locally on your device, you have complete control over it:
          </p>
          <ul className="privacy-list">
            <li><strong>Access:</strong> All your data is accessible within the app. You can view, edit, or delete any comparison or data at any time.</li>
            <li><strong>Export:</strong> You can export your data as PDF files or .chooseright files at any time through the app's export features.</li>
            <li><strong>Delete:</strong> You can delete individual comparisons or all app data directly from the app. Uninstalling the app will also remove all locally stored data.</li>
            <li><strong>Backup:</strong> You can create backups by exporting your data to files, which you can store wherever you choose.</li>
          </ul>
          <p className="privacy-text">
            Since we do not collect or store any of your data on our servers, there is no data to request from us. All your data belongs to you and remains on your device.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">9. Children's Privacy</h3>
          <p className="privacy-text">
            ChooseRight! is not intended for children under the age of 13. Since the app does not collect any personal information and all data is stored locally on the device, there are no privacy concerns related to data collection. However, parents should be aware that children can create and store comparisons within the app on their device.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">10. Changes to This Privacy Policy</h3>
          <p className="privacy-text">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">11. Contact Us</h3>
          <p className="privacy-text">
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
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
          <p className="privacy-text">
            <strong>Key Points:</strong>
          </p>
          <ul className="privacy-list">
            <li>All your data is stored locally on your device using iOS Core Data</li>
            <li>We do not collect, access, or transmit any personal information</li>
            <li>The app works completely offline</li>
            <li>No analytics, tracking, or advertising services are used</li>
            <li>File access is only granted through iOS system dialogs with your explicit consent</li>
            <li>You have full control over your data - export, delete, or manage it as you wish</li>
            <li>The app does not request access to camera, microphone, location, contacts, or other sensitive permissions</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h3 className="privacy-subtitle">13. Consent</h3>
          <p className="privacy-text">
            By using ChooseRight!, you consent to our Privacy Policy and agree to its terms. If you do not agree with this policy, please do not use our application.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
