const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Shared by the client form (instant feedback) and the API route
 * (never trust the client). Returns an empty object when valid.
 *
 * @param {{ name: string, email: string, message: string }} values
 * @returns {{ name?: string, email?: string, message?: string }}
 */
export function validateContactForm(values) {
  const errors = {};

  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (name.length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  }

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "That email address doesn't look right.";
  }

  if (message.length < 10) {
    errors.message = "Tell us a little more (at least 10 characters).";
  } else if (message.length > 1000) {
    errors.message = "Please keep your message under 1000 characters.";
  }

  return errors;
}
