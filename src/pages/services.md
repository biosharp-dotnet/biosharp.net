---
title: Services
---

export const pageStyles = {
  wrapper: {
    fontFamily: "inherit",
  },
  hero: {
    background: "linear-gradient(135deg, #0d1b2a 0%, #1a2a3a 100%)",
    padding: "3.5rem 1.5rem 2.5rem",
    textAlign: "center",
  },
  heroTitle: {
    fontSize: "2.4rem",
    fontWeight: 800,
    color: "#ffffff",
    marginBottom: "0.5rem",
  },
  heroSub: {
    fontSize: "1.05rem",
    color: "#a8bdd1",
    maxWidth: "560px",
    margin: "0 auto",
    lineHeight: 1.65,
  },
  body: {
    maxWidth: "1040px",
    margin: "0 auto",
    padding: "3rem 1.5rem 4rem",
    display: "flex",
    flexDirection: "column",
    gap: "2.5rem",
  },
  card: {
    background: "#ffffff",
    border: "1px solid #e2ecf3",
    borderRadius: "12px",
    padding: "2rem 2rem 1.8rem",
    boxShadow: "0 2px 12px rgba(13,27,42,0.06)",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "0.9rem",
    marginBottom: "1.2rem",
    borderBottom: "2px solid #f0f6fb",
    paddingBottom: "1rem",
  },
  cardIcon: {
    fontSize: "2rem",
    lineHeight: 1,
  },
  cardTitle: {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "#0d1b2a",
    margin: 0,
  },
  cardDesc: {
    fontSize: "0.9rem",
    color: "#5a7a8a",
    marginTop: "0.15rem",
  },
  tagGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  tag: {
    background: "#f0f6fb",
    border: "1px solid #d0dde8",
    borderRadius: "20px",
    padding: "0.35rem 0.85rem",
    fontSize: "0.85rem",
    color: "#344a5a",
    fontWeight: 500,
  },
  bulletList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
  },
  bulletItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.6rem",
    fontSize: "0.95rem",
    color: "#344a5a",
    lineHeight: 1.55,
  },
  bullet: {
    color: "#25c2a0",
    fontWeight: 700,
    flexShrink: 0,
    marginTop: "2px",
  },
  cta: {
    background: "linear-gradient(135deg, #0f2233 0%, #1a2a3a 100%)",
    borderRadius: "12px",
    padding: "2.2rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "1.2rem",
  },
  ctaText: {
    color: "#ffffff",
    fontSize: "1.1rem",
    fontWeight: 700,
    margin: 0,
  },
  ctaSub: {
    color: "#a8bdd1",
    fontSize: "0.9rem",
    marginTop: "0.25rem",
  },
  ctaBtn: {
    display: "inline-block",
    background: "#25c2a0",
    color: "#0d1b2a",
    fontWeight: 700,
    fontSize: "0.95rem",
    padding: "0.7rem 1.6rem",
    borderRadius: "7px",
    textDecoration: "none",
    flexShrink: 0,
    transition: "background 0.2s",
  },
};

export const Tag = ({label}) => (
  <span style={pageStyles.tag}>{label}</span>
);

export const BulletItem = ({text}) => (
  <li style={pageStyles.bulletItem}>
    <span style={pageStyles.bullet}>›</span>
    <span>{text}</span>
  </li>
);

export const ServicesPage = () => (
  <div style={pageStyles.wrapper}>

    {/* ── HERO ── */}
    <div style={pageStyles.hero}>
      <h1 style={pageStyles.heroTitle}>Services</h1>
      <p style={pageStyles.heroSub}>
        From hands-on training to production-grade pipelines, we support
        research teams at every stage of their bioinformatics journey.
      </p>
    </div>

    <div style={pageStyles.body}>

      {/* ── TRAINING ── */}
      <div style={pageStyles.card}>
        <div style={pageStyles.cardHeader}>
          <span style={pageStyles.cardIcon}>🔬</span>
          <div>
            <h2 style={pageStyles.cardTitle}>Bioinformatics Training</h2>
            <p style={pageStyles.cardDesc}>
              Structured courses for wet-lab scientists, students, and
              bioinformatics newcomers.
            </p>
          </div>
        </div>
        <div style={pageStyles.tagGrid}>
          <Tag label="Command-line basics (Bash / PowerShell)" />
          <Tag label="Vim text editor" />
          <Tag label="VS Code" />
          <Tag label="Bash scripting" />
          <Tag label="PowerShell scripting" />
          <Tag label="Conda & Bioconda" />
          <Tag label="Docker containers" />
          <Tag label="Nextflow — core concepts" />
          <Tag label="Nextflow — public pipelines" />
          <Tag label="Secure data transfer (rclone)" />
          <Tag label="Git & GitHub" />
        </div>
      </div>

      {/* ── INFRASTRUCTURE ── */}
      <div style={pageStyles.card}>
        <div style={pageStyles.cardHeader}>
          <span style={pageStyles.cardIcon}>⚙️</span>
          <div>
            <h2 style={pageStyles.cardTitle}>Consulting — Infrastructure</h2>
            <p style={pageStyles.cardDesc}>
              Setup and automation for research computing environments,
              on-premises or in the cloud.
            </p>
          </div>
        </div>
        <ul style={pageStyles.bulletList}>
          <BulletItem text="System configuration and optimisation for bioinformatics workloads" />
          <BulletItem text="Process automation (CI/CD, scheduling, job management)" />
          <BulletItem text="Cloud execution environments — AWS, Google Cloud, Azure" />
          <BulletItem text="Container orchestration with Docker and Kubernetes" />
        </ul>
      </div>

      {/* ── PIPELINES ── */}
      <div style={pageStyles.card}>
        <div style={pageStyles.cardHeader}>
          <span style={pageStyles.cardIcon}>🧬</span>
          <div>
            <h2 style={pageStyles.cardTitle}>Consulting — Pipeline Development</h2>
            <p style={pageStyles.cardDesc}>
              Convert your existing scripts into reproducible, scalable
              Nextflow pipelines ready for production.
            </p>
          </div>
        </div>
        <ul style={pageStyles.bulletList}>
          <BulletItem text="Translation of bioinformatics scripts into Nextflow DSL-2 pipelines" />
          <BulletItem text="Pipeline documentation: Standard Operating Procedure (SOP)" />
          <BulletItem text="Pipeline documentation: dedicated website or README" />
          <BulletItem text="Integration with Nextflow Tower / Seqera Platform for monitoring" />
        </ul>
      </div>

      {/* ── CTA ── */}
      <div style={pageStyles.cta}>
        <div>
          <p style={pageStyles.ctaText}>Have a project in mind?</p>
          <p style={pageStyles.ctaSub}>
            Tell us what you're working on and we'll find the best approach
            together.
          </p>
        </div>
        <a href="/contact" style={pageStyles.ctaBtn}>
          Get in touch →
        </a>
      </div>

    </div>
  </div>
);

<ServicesPage />
