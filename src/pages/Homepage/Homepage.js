import React, { Fragment } from 'react';
import BookingStrip from '../../components/UI/BookingStrip/BookingStrip';
import DestinationSpot from '../../components/UI/DestinationSpot/DestinationSpot';
import Facilities from '../../components/UI/Facilities/Facilities';

import Hero from '../../components/UI/Hero/Hero';
import HotelService from '../../components/UI/HotelService/HotelService';
import RoomSlider from '../../components/UI/RoomsSlider/RoomSlider';
import SubscribeStrip from '../../components/UI/SubscribeStrip/SubscribeStrip';

const Homepage = () => {
  return (
    <Fragment>
      <div className="wrapper">
        <Hero />
        <RoomSlider />
        <BookingStrip />
        <Facilities />
        <HotelService />
        <DestinationSpot />
        <SubscribeStrip />
      </div>
    </Fragment>
  );
};

export default Homepage;
