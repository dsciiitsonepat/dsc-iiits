import { Tabs, Tab } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "../styles/Events.css";
import EventCarousel from "../components/EventCarousel";
import firebase from "../firebase";

export default function Events() {
  const [tab, setTab] = useState(0);
  const [pastEvents, setPastEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  const handleTabChange = (e, x) => setTab(x);

  useEffect(() => {
    const fetchEvents = async () => {
      const now = firebase.firestore.Timestamp.now();
      const db = firebase.firestore();
      const data = await db.collection("events").get();
      const events = data.docs.map((doc) => doc.data());
      setPastEvents(events.filter((event) => event.timestamp < now));
      setUpcomingEvents(events.filter((event) => event.timestamp > now));
    };
    fetchEvents();
  }, []);

  return (
    <div className="event-main">
      <div className="event-page">
        <h1>Events & Workshops</h1>
        <div className="tab-wrapper">
          <Tabs
            value={tab}
            onChange={handleTabChange}
            centered
            textColor="primary"
            style={{ paddingBottom: "16px" }}
          >
            <Tab label="Past Events"></Tab>
            <Tab label="Upcoming Events"></Tab>
          </Tabs>

          <div
            hidden={tab !== 0}
            style={{
              display: "flex",
              flexDirection: "row",
              position: "relative",
            }}
          >
            {tab === 0 && <EventCarousel slides={pastEvents} />}
          </div>
        </div>
        <div
          hidden={tab !== 1}
          style={{
            display: "flex",
            flexDirection: "row",
            position: "relative",
          }}
        >
          {tab === 1 && <EventCarousel slides={upcomingEvents} />}
        </div>
      </div>
    </div>
  );
}
