import React from 'react';

const SubscribeStrip = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div className="box">
          <h2 className="title">Subscribe</h2>
          <div className="text">
            <p>& receive free premium gifts</p>
          </div>
          <div className="form-group">
            <input
              type="text"
              defaultValue={''}
              placeholder="Subscribe"
              className="form-control"
            />
            <button className="btn btn-sm btn-main">Go</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeStrip;
