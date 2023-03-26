import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const Event = () => {
  const events = [
    {
      title: "Welcome Mixer",
      time: "7:00 PM",
      location: "Peerless Grille and Salon",
      lat: "33.65760295726795",
      lng: "-85.83040843066253",
      note: "21+",
    },
    {
      title: "The Cookout",
      time: "3:00 - 5:00 PM",
      location: "International House",
      lat: "33.82549295263616",
      lng: "-85.76485300070841",
      note: "",
    },
    {
      title: "The After Party",
      time: "8:00 PM",
      location: "Alumni's house",
      lat: "",
      lng: "",
      note: "21+",
    },
  ];

  return (
    <div className="event-wrapper">
      <h1>Events</h1>
      {events.map((event, key) => {
        return (
          <div className="event" id={key}>
            <h3>{event.title}</h3>
            <br />
            <p> {event.time}</p>
            <p>
              <a
                href={`https://www.google.com/maps?q=${event.lat},${event.lng}`}
                target="_blank"
              >
                {event.location}
              </a>
            </p>
            {event.note ? event.note : ""}
          </div>
        );
      })}
    </div>
  );
};

export default Event;
