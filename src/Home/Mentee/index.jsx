/**
 * Tables Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Mapgrid from "./mapgrid"
import Maplist from "./maplist"
import Searchmentors from "./searchmentors"
import BookingsMentee from "./bookingsmentee"
import MenteeDashboard from "./menteedashboard"
import MentorProfile from "./mentorprofile"
import Booking from "./booking"
import AddEvent from "./addEvent"
import Tracks from "./tracks"
import AddTrack from "./addTrack"
import Checkout from "./checkout"
import EventDetails from "./eventDetails"
import BookingSuccess from "./bookingsuccess"
import Chatmentee from "./chatmentee"
import Favorites from "./favorites"
import Profilesettingmentee from "./profilesettingmentee"
import Changepassword from "./changepassword"
import TrackDetails from "./trackDetails"

const Menteeroute = ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/mentor-profile`} />
        <Route path={`${match.url}/mentor-profile`} component={MentorProfile} />
        <Route path={`${match.url}/map-grid`} component={Mapgrid} />
        <Route path={`${match.url}/map-list`} component={Maplist} />
        <Route path={`${match.url}/search`} component={Searchmentors} />
        <Route path={`${match.url}/bookings-mentee`} component={BookingsMentee} />
        <Route path={`${match.url}/dashboard-mentee`} component={MenteeDashboard} />
        <Route path={`${match.url}/booking`} component={Booking} />
        <Route path={`${match.url}/addEvent`} component={AddEvent} />
        <Route path={`${match.url}/addTrack`} component={AddTrack} />
        <Route path={`${match.url}/eventDetails`} component={EventDetails} />
        <Route path={`${match.url}/tracks`} component={Tracks} />
        <Route path={`${match.url}/checkout`} component={Checkout} />
        <Route path={`${match.url}/booking-success`} component={BookingSuccess} />
        <Route path={`${match.url}/chat-mentee`} component={Chatmentee} />
        <Route path={`${match.url}/favourites`} component={Favorites} />
        <Route path={`${match.url}/profile-settings-mentee`} component={Profilesettingmentee} />
        <Route path={`${match.url}/change-password`} component={Changepassword} />
        <Route path={`${match.url}/trackDetails`} component={TrackDetails} />
    </Switch>
);

export default Menteeroute;
