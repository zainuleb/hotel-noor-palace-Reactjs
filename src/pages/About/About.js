import React, { Fragment } from 'react';
import AboutUI from '../../components/UI/AboutUI/AboutUI.js';
import AboutHeader from '../../components/UI/PageHeaders/AboutHeader.js';
const About = () => {
  return (
    <Fragment>
      <section className="page">
        <AboutHeader />
        <AboutUI />
      </section>
    </Fragment>
  );
};

export default About;
