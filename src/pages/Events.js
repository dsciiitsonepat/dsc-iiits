import { Tabs, Tab} from '@material-ui/core'
import React, { useState } from 'react'
import "../styles/Events.css";
import EventCarousel from '../components/EventCarousel';

export default function Events() {
  const [tab, setTab] = useState(0)
  const [pastEvents, setPastEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([])

  const handleTabChange = (e, x) => setTab(x);

    return (
      <div className = "event-main" >
        <div className="event-page" >
          <h1>Events & Workshops</h1>
          <div className="tab-wrapper" >
            <Tabs
              value={tab}
              onChange = {handleTabChange}
              centered
              textColor="primary"
              style={{paddingBottom: "16px"}}
            >
              <Tab label="Past Events">
              </Tab>
              <Tab label="Upcoming Events">
              </Tab>
            </Tabs>
            <div hidden={tab!==0} style={{display:"flex", flexDirection:"row",position:"relative"}}>
              {tab===0 && <EventCarousel/>}
            </div>
          </div>
          <div hidden={tab!==1} style={{display:"flex", flexDirection:"row",position:"relative"}}>
            {tab===1 && <EventCarousel/>}
          </div>
        </div>
      </div>
    );
}
  