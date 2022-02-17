import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import BioSharpLogoImage from "@site/static/img/biosharp_logo.png";
import { SocialIcon } from 'react-social-icons';

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Home Page`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div class="hero shadow--lw">
          <div class="container">
            <div class="row row--no-gutters">
              <div class="col"> </div>

              <div class="col col--offset-2">
                {/* <h1 class="hero__title">BioSharp OÜ</h1> */}
                <img src={BioSharpLogoImage} width={234} height={45} />
                <p class="hero__subtitle">
                  We make Bioinformatics simple and easy.
                </p>



                <div>

                  <SocialIcon url="https://github.com/biosharp-dotnet" />
                  <SocialIcon url="https://www.linkedin.com/company/biosharp" />
                  <SocialIcon url="https://www.youtube.com/channel/UChZX3OqkjS1SuGV_XPLPZ-Q?view_as=subscriber" />
                  <SocialIcon url="https://www.facebook.com/BioSharp.net/" />
                  <SocialIcon url="https://twitter.com/BioSharp_dotnet" />

                </div>

              </div>
{/* 
              <div class="card padding--lg padding-left--lg margin-left--lg">
                <div class="card__body">
                  <h4>Estonian Marketplace profile</h4>
                  <small>
                    BioSharp OÜ is a company registered in Estonia, Europe.
                  </small>
                </div>
                <div class="card__footer">
                  <button class="button ">
                    <a href="https://company.e-resident.gov.ee/company/16019987" > Visit company page </a>
                  </button>
                </div>
              </div>
 */}


              <div class="col"> </div>


            </div>

            {/* <button class="button button--outline button--primary">
              <a href="https://company.e-resident.gov.ee/company/16019987" > Estonian Marketplace </a>
            </button> */}

          </div>
        </div>
      </main>
    </Layout>
  );
}
