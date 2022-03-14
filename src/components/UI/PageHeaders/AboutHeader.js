import React, { Fragment } from 'react';

const AboutHeader = () => {
  return (
    <Fragment>
      <div
        className="page-header"
        style={{ backgroundImage: 'url(assets/images/header-1.jpg)' }}
      >
        <div className="container">
          <h2 className="title">The hotel</h2>
          <p>The place, our services & our team</p>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutHeader;
