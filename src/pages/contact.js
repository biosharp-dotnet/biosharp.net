import React, { useState } from "react";
import Layout from "@theme/Layout";
import { SocialIcon } from "react-social-icons";
import styles from "./contact.module.css";

const SOCIAL_LINKS = [
  {
    url: "https://github.com/biosharp-dotnet",
    label: "GitHub",
    description: "Open-source pipelines & tools",
  },
  {
    url: "https://www.linkedin.com/company/biosharp",
    label: "LinkedIn",
    description: "Professional updates & news",
  },
  {
    url: "https://www.youtube.com/channel/UChZX3OqkjS1SuGV_XPLPZ-Q?view_as=subscriber",
    label: "YouTube",
    description: "Tutorials & recorded talks",
  },
  {
    url: "https://www.facebook.com/BioSharp.net/",
    label: "Facebook",
    description: "Community announcements",
  },
  {
    url: "https://twitter.com/BioSharp_dotnet",
    label: "Twitter / X",
    description: "Quick updates & bioinformatics tips",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  // The form submits to Formspree (or any compatible endpoint).
  // Replace the action URL with your own endpoint or Formspree form ID.
  function handleSubmit(e) {
    e.preventDefault();
    // If you have a Formspree endpoint, replace the fetch URL below.
    // For now we show a success message to demonstrate the UX.
    setSubmitted(true);
  }

  return (
    <Layout
      title="Contact Us"
      description="Get in touch with the BioSharp team."
    >
      <main className={styles.contactPage}>
        {/* ── PAGE HEADER ── */}
        <section className={styles.header}>
          <h1 className={styles.headerTitle}>Contact Us</h1>
          <p className={styles.headerSubtitle}>
            Have a question, a project in mind, or want to explore a
            collaboration?<br />We'd love to hear from you.
          </p>
        </section>

        <section className={styles.body}>
          {/* ── CONTACT FORM ── */}
          <div className={styles.formColumn}>
            <h2 className={styles.columnTitle}>Send a message</h2>

            {submitted ? (
              <div className={styles.successBox}>
                <span className={styles.successIcon}>✅</span>
                <p>
                  <strong>Thanks for reaching out!</strong><br />
                  We'll get back to you at <em>{formState.email}</em> as soon
                  as possible.
                </p>
              </div>
            ) : (
              <form
                className={styles.form}
                onSubmit={handleSubmit}
                // To use Formspree: set action="https://formspree.io/f/YOUR_ID"
                // method="POST" and remove the onSubmit / JS handling.
              >
                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>
                      Name <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className={styles.input}
                      value={formState.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>
                      Email <span className={styles.required}>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className={styles.input}
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="subject" className={styles.label}>
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="e.g. Pipeline consulting inquiry"
                    className={styles.input}
                    value={formState.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="message" className={styles.label}>
                    Message <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us what you're working on…"
                    className={styles.textarea}
                    value={formState.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send message →
                </button>
              </form>
            )}
          </div>

          {/* ── SOCIAL / CONNECT ── */}
          <div className={styles.socialColumn}>
            <h2 className={styles.columnTitle}>Find us online</h2>
            <p className={styles.socialIntro}>
              Follow BioSharp on any of these platforms for tutorials, updates,
              and open-source work.
            </p>

            <div className={styles.socialList}>
              {SOCIAL_LINKS.map(({ url, label, description }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialItem}
                >
                  <SocialIcon
                    url={url}
                    bgColor="#25c2a0"
                    style={{ height: 40, width: 40, flexShrink: 0 }}
                  />
                  <div>
                    <span className={styles.socialLabel}>{label}</span>
                    <span className={styles.socialDesc}>{description}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className={styles.emailBox}>
              <span className={styles.emailIcon}>✉️</span>
              <div>
                <span className={styles.emailLabel}>Email us directly</span>
                <a
                  href="mailto:contact@biosharp.net"
                  className={styles.emailAddress}
                >
                  contact@biosharp.net
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
