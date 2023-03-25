import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const Event = () => {
  const events = [
    {
      title: "Welcome Mixer",
      time: "7:00 PM",
      location: "Peerless Grille and Salon",
      note: "21+",
    },
    {
      title: "The Cookout",
      time: "3:00 - 5:00 PM",
      location: "International House",
      note: "",
    },
    {
      title: "The After Party",
      time: "8:00 PM",
      location: "Alumni's house",
      note: "21+",
    },
  ];
  return (
    <div className="event-wrapper">
      <h1>Event</h1>
      {events.map((event, key) => {
        return (
          <div className="event" id={key}>
            <h3>{event.title}</h3>
            <br />
            <p>Time: {event.time}</p>
            <p>Location: {event.location}</p>
            {event.note ? event.note : ""}
          </div>
        );
      })}
    </div>
  );
};

export default Event;
