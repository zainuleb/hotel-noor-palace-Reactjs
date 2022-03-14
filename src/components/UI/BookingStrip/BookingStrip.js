import React from 'react';

const BookingStrip = () => {
  return (
    <section className="booking booking-default-theme">
      <div className="section-header">
        <div className="container">
          <h2 className="title">Check Availability</h2>
        </div>
      </div>
      <div className="booking-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xs-4 col-sm-3">
              <div className="date" id="dateArrival" data-text="Arrival">
                <input className="datepicker" readOnly="readOnly" />
                <div className="date-value"></div>
              </div>
            </div>
            <div className="col-xs-4 col-sm-3">
              <div className="date" id="dateDeparture" data-text="Departure">
                <input className="datepicker" readOnly="readOnly" />
                <div className="date-value"></div>
              </div>
            </div>
            <div className="col-xs-4 col-sm-2">
              <div className="guests" data-text="Guests">
                <div className="result">
                  <input
                    className="qty-result"
                    type="text"
                    value="2"
                    id="qty-result"
                    readOnly="readOnly"
                  />
                  <div
                    className="qty-result-text date-value"
                    id="qty-result-text"
                  ></div>
                </div>

                <ul className="guest-list">
                  <li className="header">
                    Please choose number of guests{' '}
                    <span className="qty-apply">
                      <i className="icon icon-cross"></i>
                    </span>
                  </li>
                  <li className="clearfix">
                    <div>
                      <input
                        className="qty-amount"
                        value="2"
                        type="text"
                        id="ticket-adult"
                        data-value="2"
                        readOnly="readOnly"
                      />
                    </div>
                    <div>
                      <span>
                        Adults <small>16+ years</small>
                      </span>
                    </div>
                    <div>
                      <input
                        className="qty-btn qty-minus"
                        value="-"
                        type="button"
                        data-field="ticket-adult"
                      />
                      <input
                        className="qty-btn qty-plus"
                        value="+"
                        type="button"
                        data-field="ticket-adult"
                      />
                    </div>
                  </li>
                  <li className="clearfix">
                    <div>
                      <input
                        className="qty-amount"
                        value="0"
                        type="text"
                        id="ticket-children"
                        data-value="0"
                        readOnly="readOnly"
                      />
                    </div>
                    <div>
                      <span>
                        Children <small>2-11 years</small>
                      </span>
                    </div>
                    <div>
                      <input
                        className="qty-btn qty-minus"
                        value="-"
                        type="button"
                        data-field="ticket-children"
                      />
                      <input
                        className="qty-btn qty-plus"
                        value="+"
                        type="button"
                        data-field="ticket-children"
                      />
                    </div>
                  </li>
                  <li className="clearfix">
                    <div>
                      <input
                        className="qty-amount"
                        value="0"
                        type="text"
                        id="ticket-infants"
                        data-value="0"
                        readOnly="readOnly"
                      />
                    </div>
                    <div>
                      <span>
                        Infants <small>Under 2 years</small>
                      </span>
                    </div>
                    <div>
                      <input
                        className="qty-btn qty-minus"
                        value="-"
                        type="button"
                        data-field="ticket-infants"
                      />
                      <input
                        className="qty-btn qty-plus"
                        value="+"
                        type="button"
                        data-field="ticket-infants"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <a href="reservation-1.html" className="btn btn-clean">
                Book now
                <small>Best Prices Guaranteed</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingStrip;
