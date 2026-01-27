import { EMAIL, EMAIL_OBFUSCATED, EMAIL_SUBJECT } from "../constants";

/**
 * Deobfuscates email by replacing & with .
 * @returns {string} Deobfuscated email
 */
export const deobfuscateEmail = () => {
  return EMAIL_OBFUSCATED.replace(/&/g, ".");
};

/**
 * Gets the contact email
 * @returns {string} Email address
 */
export const getEmail = () => {
  return EMAIL;
};

/**
 * Opens email client with pre-filled subject
 * @param {string} subject - Email subject (optional)
 */
export const openEmailClient = (subject = EMAIL_SUBJECT) => {
  window.open(`mailto:${EMAIL}?subject=${subject}`, "_blank");
};

/**
 * Copies email to clipboard
 */
export const copyEmailToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    alert("Email copied to clipboard!");
  } catch (error) {
    console.error("Failed to copy email:", error);
    alert("Failed to copy email. Please copy manually: " + EMAIL);
  }
};
