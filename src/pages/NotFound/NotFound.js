import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h2>Seyyy</h2>
      <section className="not-found">
        <div className="container">
          <h1 className="title" data-title="404">
            404
          </h1>
          <div className="h4 subtitle">Sorry! Page not found.</div>
          <p>
            The requested URL was not found on this server. That’s all we know.
          </p>
          <p>
            Click <a href="/#">here</a> to get to the front page?
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default NotFound;
