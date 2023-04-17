/**
 * Tables Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Voicecall from "./voicecall"
import VideoCall from "./videocall"
import Components from "./components"
import StarterPage from "./starterpage"
import ContactUs from "./contactus"
import AboutUs from "./aboutus"
import WatchList from "./watchlist"
import UserProfile from "./userprofile"
// import TrackDetails from "./trackDetails"

const Pageroute = ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/voice-call`} />
        <Route path={`${match.url}/voice-call`} component={Voicecall} />
        <Route path={`${match.url}/video-call`} component={VideoCall} />
        <Route path={`${match.url}/components`} component={Components} />
        <Route path={`${match.url}/blank-page`} component={StarterPage} />
        <Route path={`${match.url}/contactus`} component={ContactUs} />
        <Route path={`${match.url}/aboutus`} component={AboutUs} />
        <Route path={`${match.url}/watchlist`} component={WatchList} />
        <Route path={`${match.url}/userprofile`} component={UserProfile} />
        {/* <Route path={`${match.url}/trackDetails`} component={TrackDetails} /> */}
    </Switch>
);

export default Pageroute;
