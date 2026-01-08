import React from "react";
import "./css/chooseright.css";
import AnimatedText from "./AnimatedText";
import appChooseRight from "./assets/img/AppChooseRight.png";

function ChooseRight() {
  return (
    <div className="chooseright-project">
      <div className="chooseright-h1">
        <AnimatedText page="chooseright" title="Choose Right!" />
      </div>

      <div className="chooseright-content">
        <div className="chooseright-hero">
          <div className="chooseright-image">
            <img src={appChooseRight} alt="ChooseRight App" />
          </div>
          <div className="chooseright-info">
            <h4 className="chooseright-category">APP Design, Development</h4>
            <p className="chooseright-description">
              Applications for iPhones <strong>Choose Right</strong> help users make a choice from a variety of options.
            </p>
          </div>
        </div>

        <div className="chooseright-section">
          <h2 className="chooseright-section-title">About the Project</h2>
          <p className="chooseright-text">
            ChooseRight! is a mobile application for iOS designed to help users make decisions without stress. The app allows users to create comparisons between different options, add evaluation criteria (attributes), and rate each option. The application calculates relevance and helps users choose the optimal option.
          </p>
        </div>

        <div className="chooseright-section">
          <h3 className="chooseright-subtitle">Key Features</h3>
          <ul className="chooseright-list">
            <li>
              <strong>Comparison Creation:</strong> Easily create comparisons between different options
            </li>
            <li>
              <strong>Custom Criteria:</strong> Add your own evaluation criteria (attributes) to assess options
            </li>
            <li>
              <strong>Rating System:</strong> Rate each option based on your criteria
            </li>
            <li>
              <strong>Smart Calculation:</strong> The app calculates relevance scores to help you make the best choice
            </li>
            <li>
              <strong>Local Storage:</strong> All data is stored locally on your device using iOS Core Data
            </li>
            <li>
              <strong>Privacy First:</strong> No data collection, no tracking, completely offline
            </li>
          </ul>
        </div>

        <div className="chooseright-section">
          <h3 className="chooseright-subtitle">Design & Development</h3>
          <p className="chooseright-text">
            ChooseRight! was designed with a focus on simplicity and user experience. The interface is clean and intuitive, allowing users to focus on making decisions rather than learning how to use the app.
          </p>
          <p className="chooseright-text">
            The application is built using native iOS technologies, ensuring smooth performance and seamless integration with the iOS ecosystem.
          </p>
        </div>

        <div className="chooseright-section">
          <h3 className="chooseright-subtitle">Privacy & Security</h3>
          <p className="chooseright-text">
            ChooseRight! is committed to user privacy. All data is stored locally on your device and never transmitted to external servers. The app works completely offline and does not collect any personal information.
          </p>
          <p className="chooseright-text">
            For more information about privacy, please see our{" "}
            <a href="/#/privacy-policy" className="chooseright-link">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChooseRight;
