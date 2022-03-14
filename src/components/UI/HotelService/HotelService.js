import React, { Fragment } from 'react';

const HotelService = () => {
  return (
    <Fragment>
      <section className="facilities">
        <div className="section-header text-center">
          <div className="container">
            <h2 className="title">Hotel services</h2>
            <p>Experience & aminities</p>
          </div>
        </div>

        <div className="container">
          <div className="facilities-wrapper">
            <div className="row">
              <div className="col-xs-6 col-sm-3">
                <figure>
                  <figcaption>
                    <span className="hotelicon hotelicon-roomservice"></span>
                    <p className="title">Roomservice</p>
                  </figcaption>
                </figure>
              </div>

              <div className="col-xs-6 col-sm-3">
                <figure>
                  <figcaption>
                    <span className="hotelicon hotelicon-wifi"></span>
                    <p className="title">Free Wifi</p>
                  </figcaption>
                </figure>
              </div>

              <div className="col-xs-6 col-sm-3">
                <figure>
                  <figcaption>
                    <span className="hotelicon hotelicon-kitchen"></span>
                    <p className="title">Resturant</p>
                  </figcaption>
                </figure>
              </div>
              <div className="col-xs-6 col-sm-3">
                <figure>
                  <figcaption>
                    <span className="hotelicon hotelicon-coctail"></span>
                    <p className="title">Coctail bar</p>
                  </figcaption>
                </figure>
              </div>

              <div className="col-xs-6 col-sm-3">
                <figure>
                  <figcaption>
                    <span className="hotelicon hotelicon-parking"></span>
                    <p className="title">Free parking</p>
                  </figcaption>
                </figure>
              </div>

              <div className="col-xs-6 col-sm-3">
                <figure>
                  <figcaption>
                    <span className="hotelicon hotelicon-pool"></span>
                    <p className="title">Pool</p>
                  </figcaption>
                </figure>
              </div>

              <div className="col-xs-6 col-sm-3">
                <figure>
                  <figcaption>
                    <span className="hotelicon hotelicon-elevator"></span>
                    <p className="title">Elevator</p>
                  </figcaption>
                </figure>
              </div>

              <div className="col-xs-6 col-sm-3">
                <figure>
                  <figcaption>
                    <span className="hotelicon hotelicon-keys"></span>
                    <p className="title">Private rooms</p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HotelService;
