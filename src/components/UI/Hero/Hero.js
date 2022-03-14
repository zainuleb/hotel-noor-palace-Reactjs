import React from 'react';

const Hero = () => {
  return (
    <section className="frontpage-slider">
      <div className="owl-slider owl-slider-header">
        <div
          className="item"
          style={{ backgroundImage: 'url(assets/images/slide-3.jpg)' }}
        >
          <div className="box text-center">
            <div className="container">
              <h2 className="title animated h1" data-animation="fadeInDown">
                Fairmont managed!
              </h2>
              <div className="desc animated" data-animation="fadeInUp">
                The elegant Champagne Bar, the stylish Colina Club.
              </div>
              <div className="desc animated" data-animation="fadeInUp">
                Guestrooms and luxurious suites
              </div>
              <div className="animated" data-animation="fadeInUp">
                <a href="/#" className="btn btn-clean">
                  Get insipred
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: 'url(assets/images/slide-2.jpg)' }}
        >
          <div className="box text-center">
            <div className="container">
              <h2 className="title animated h1" data-animation="fadeInDown">
                A moment of <br /> <span>pure prestige</span>
              </h2>
              <div className="desc animated" data-animation="fadeInUp">
                Lavish social and business events
              </div>
              <div className="desc animated" data-animation="fadeInUp">
                and unforgettable weddings.
              </div>
              <div className="animated" data-animation="fadeInUp">
                <a
                  href="https://themeforest.net/item/colina-hotel-website-template/20977257"
                  className="btn btn-clean"
                >
                  Buy this template
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: 'url(assets/images/slide-1.jpg' }}
        >
          <div className="box text-center">
            <div className="container">
              <h2 className="title animated h1" data-animation="fadeInDown">
                The privacy and <br />
                individuality of a custom
              </h2>
              <div className="desc animated" data-animation="fadeInUp">
                The Residences have their own dedicated private entrance as well{' '}
                <br />
                as an anonymous "celebrity" entrance, for ultimate privacy.
              </div>
              <div className="animated" data-animation="fadeInUp">
                <a href="/#" className="btn btn-clean">
                  Virtual tour
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
