import { useState } from "react";

const Event = () => {
  const [event, setEvent] = useState({
    summary: "Example Event",
    description: "This is an example event",
    location: "123 Example Street, Exampleville",
    start: "2022-04-01T13:00:00.000Z",
    end: "2022-04-01T14:00:00.000Z",
  });

  const downloadEvent = () => {
    const { summary, description, location, start, end } = event;
    const startDateTime = new Date(start)
      .toISOString()
      .replace(/-|:|\.\d+/g, "");
    const endDateTime = new Date(end).toISOString().replace(/-|:|\.\d+/g, "");
    const ics = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${summary}
DESCRIPTION:${description}
LOCATION:${location}
DTSTART:${startDateTime}
DTEND:${endDateTime}
END:VEVENT
END:VCALENDAR`;
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${summary}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

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
            <p>{event.note ? event.note : ""}</p>
            <br />
            <p> {event.time}</p>
            <p>
              <a
                href={`https://www.google.com/maps?q=${event.lat},${event.lng}`}
                target="_blank"
              >
                {event.location}
              </a>
              <div>
                <button onClick={downloadEvent}>Addto Calendar</button>
              </div>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Event;
