import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const About = () => (
  <Layout>
    <SEO title="About" />
    <div class="content">
      <div class="about">
        <h3>About me</h3>
        Hi, I'm Shunpoco, a software developer at a Japanese IT company.
        My professions are data engineering, machine learning, cloud technologies, and frontend technologies.
      </div>
      <div class="about">
        <h3>About this blog</h3>
        In this blog, I am going to share posts on software development.
        This blog is deployed using GitHub pages and managed in &nbsp;
        <a
          href="https://github.com/Shunpoco/shunpoco-dev"
          target="_blank"
          rel="noreferrer"
        >
          GitHub repository
        </a>.
        If you have any questions or find any bugs, please let me know as issues.
        I welcome your advice.
      </div>
      <div class="about">
        <h3>Contact me</h3>
          <ul>
            <li>
              <a
                href="https://github.com/Shunpoco"
                target="_blank"
                rel="noreferrer"  
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/tokunaga-shunsuke-b9b338149/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li> 
          </ul>
      </div>
    </div>
  </Layout>
)

export default About;
