import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import BioSharpLogoImage from "@site/static/img/biosharp_logo.png";
import { SocialIcon } from 'react-social-icons';
import Translate, { translate } from '@docusaurus/Translate';
import Flag from 'react-world-flags'



export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Home Page`}
      description="Description will go into a meta tag in <head />"
    >
      <main>



        <div class="hero">
          <div class="container">
            <div class="row row--no-gutters">
              <div class="col"> </div>

              <div class="col col--offset-2">
                {/* <h1 class="hero__title">BioSharp OÜ</h1> */}
                <img src={BioSharpLogoImage} width={234} height={45} />
                <p class="hero__subtitle">

                  <Translate
                    id="homepage.biosharpTagline"
                    description="The tagline for BioSharp OÜ">
                    {'We make Bioinformatics simple and easy.'}
                  </Translate>

                </p>

                <div>

                  <span class="margin--sm">  <SocialIcon url="https://github.com/biosharp-dotnet" /></span>
                  <span class="margin--sm"> <SocialIcon url="https://www.linkedin.com/company/biosharp" /> </span>
                  <span class="margin--sm"> <SocialIcon url="https://www.youtube.com/channel/UChZX3OqkjS1SuGV_XPLPZ-Q?view_as=subscriber" /> </span>
                  <span class="margin--sm"> <SocialIcon url="https://www.facebook.com/BioSharp.net/" /> </span>
                  <span class="margin--sm"> <SocialIcon url="https://twitter.com/BioSharp_dotnet" /> </span>

                </div>
                <div />
                <div />
                <div />

                <div class="margin-top--sm padding-top--sm">
                  BioSharp OÜ is a company registered in <a href="https://company.e-resident.gov.ee/company/16019987" > <Flag code={"est"} height="16" width="20" /> Estonia, Europe &hearts;
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>
      </main>
    </Layout>
  );
}
