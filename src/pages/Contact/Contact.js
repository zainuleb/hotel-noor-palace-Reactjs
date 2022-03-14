import React, { Fragment } from 'react';
import ContactHeader from '../../components/UI/PageHeaders/ContactHeader';
import ContactStrip from '../../components/UI/ContactStrip/ContactStrip';

const Contact = () => {
  return (
    <Fragment>
      <section className="page">
        <ContactHeader />
        <ContactStrip />
      </section>
    </Fragment>
  );
};

export default Contact;
