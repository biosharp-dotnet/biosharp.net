import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { SocialIcon } from "react-social-icons";
// import Translate from "@docusaurus/Translate"; // re-enable with Portuguese locale
import Flag from "react-world-flags";
import styles from "./styles.module.css";

// Inline DNA Helix SVG decoration
function DnaHelix() {
  return (
    <svg
      className={styles.dnaHelix}
      viewBox="0 0 120 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Strand 1 */}
      <path
        d="M30,0 C90,50 30,100 90,150 C30,200 90,250 30,300 C90,350 30,400 90,400"
        fill="none"
        stroke="#25c2a0"
        strokeWidth="3"
        opacity="0.7"
      />
      {/* Strand 2 */}
      <path
        d="M90,0 C30,50 90,100 30,150 C90,200 30,250 90,300 C30,350 90,400 30,400"
        fill="none"
        stroke="#4e9af1"
        strokeWidth="3"
        opacity="0.7"
      />
      {/* Rungs */}
      {[25, 75, 125, 175, 225, 275, 325, 375].map((y, i) => (
        <line
          key={i}
          x1={i % 2 === 0 ? 32 : 88}
          y1={y}
          x2={i % 2 === 0 ? 88 : 32}
          y2={y}
          stroke="#25c2a0"
          strokeWidth="2"
          opacity="0.4"
        />
      ))}
      {/* Node dots */}
      {[0, 50, 100, 150, 200, 250, 300, 350, 400].map((y, i) => (
        <React.Fragment key={i}>
          <circle cx={i % 2 === 0 ? 30 : 90} cy={y} r="5" fill="#25c2a0" opacity="0.9" />
          <circle cx={i % 2 === 0 ? 90 : 30} cy={y} r="5" fill="#4e9af1" opacity="0.9" />
        </React.Fragment>
      ))}
    </svg>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="BioSharp OÜ – We make Bioinformatics simple and easy."
    >
      <main>
        {/* ── HERO ── */}
        <section className={styles.hero}>
          <DnaHelix />

          <div className={styles.heroContent}>
            <img
              src={useBaseUrl("/img/biosharp_logo.png")}
              width={260}
              height={50}
              alt="BioSharp"
              className={styles.heroLogo}
            />

            <h1 className={styles.heroTitle}>
              Making Bioinformatics
              <br />
              <span className={styles.heroTitleAccent}>Simple and Easy.</span>
            </h1>

            <p className={styles.heroSubtitle}>
              We build tools, pipelines, and training for the modern research lab.
              {/* <Translate id="homepage.biosharpTagline" description="The tagline for BioSharp OÜ">
                {"We build tools, pipelines, and training for the modern research lab."}
              </Translate> */}
            </p>

            <div className={styles.heroCtas}>
              <Link className={styles.ctaPrimary} to="/services">
                Explore Services
              </Link>
              <Link className={styles.ctaSecondary} to="/blog">
                Read Blog
              </Link>
            </div>

            <div className={styles.socialRow}>
              <SocialIcon url="https://github.com/biosharp-dotnet" bgColor="#25c2a0" style={{ height: 38, width: 38 }} />
              <SocialIcon url="https://www.linkedin.com/company/biosharp" bgColor="#25c2a0" style={{ height: 38, width: 38 }} />
              <Link className={styles.ctaGhost} to="/contact">
                Get in touch →
              </Link>
            </div>

            <p className={styles.registration}>
              BioSharp OÜ is a company{" "}
              <a
                href="https://company.e-resident.gov.ee/company/16019987"
                className={styles.registrationLink}
              >
                registered in Estonia, Europe{" "}
                <Flag code="est" height="14" width="18" />
                {" "}<span className={styles.heart}>♥</span>
              </a>
              {/* Translate wrappers preserved below — re-enable with Portuguese locale:
              <Translate id="homepage.biosharpRegistration1">{"BioSharp OÜ is a company"}</Translate>
              <Translate id="homepage.biosharpRegistration2">{"registered in Estonia, Europe"}</Translate>
              */}
            </p>
          </div>
        </section>

        {/* ── WHAT WE DO ── */}
        <section className={styles.servicesHighlight}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>What We Do</h2>
            <p className={styles.sectionSubtitle}>
              From hands-on training to end-to-end pipeline consulting, we help
              life-science teams move faster with confidence.
            </p>
            <div className={styles.serviceCards}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceCardIcon}>🔬</div>
                <h3>Bioinformatics Training</h3>
                <p>
                  Bash, Nextflow, Docker, Git — structured courses for
                  researchers at every level.
                </p>
                <Link className={styles.cardLink} to="/services">
                  See courses →
                </Link>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceCardIcon}>⚙️</div>
                <h3>Infrastructure Consulting</h3>
                <p>
                  System configuration, process automation, and scalable
                  compute setups for your lab.
                </p>
                <Link className={styles.cardLink} to="/services">
                  Learn more →
                </Link>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceCardIcon}>🧬</div>
                <h3>Pipeline Development</h3>
                <p>
                  Translate your scripts into reproducible Nextflow pipelines
                  with full SOP documentation.
                </p>
                <Link className={styles.cardLink} to="/services">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── PARTNERS ── */}
        <section className={styles.partners}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>Partners</h2>
            <div className={styles.partnerCard}>
              <div className={styles.partnerBadge}>🤝</div>
              <div className={styles.partnerText}>
                <h3>
                  BioSharp ×{" "}
                  <a
                    href="https://incsteps.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.partnerLink}
                  >
                    incsteps.com
                  </a>
                </h3>
                <p>
                  BioSharp is collaborating with{" "}
                  <a
                    href="https://incsteps.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.partnerLink}
                  >
                    incsteps.com
                  </a>{" "}
                  to create tailored bioinformatics solutions for research
                  institutions — combining domain expertise with robust software
                  delivery.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
