import React from "react";

const getDate = (date, { day = true, month = true, year = true } = {}) =>
  date.toLocaleString("en-US", {
    day: day ? "numeric" : undefined,
    month: month ? "long" : undefined,
    year: year ? "numeric" : undefined,
  });

const EventDate = ({ startDate, endDate }) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const isOneDay = start.toDateString() === end.toDateString();

  console.log(start.getMonth(), end.getMonth());

  return (
    <>
      <time dateTime={start.toISOString()}>
        {/* only show the year if isOneDay is true */}
        {getDate(start, { year: isOneDay })}
      </time>
      {!isOneDay && (
        <>
          {""} - <time dateTime={end.toISOString()}>{getDate(end)}</time>
        </>
      )}
    </>
  );
};
const Event = ({ name, location, url, startDate, endDate }) => (
  <div>
    <h1>
      {name} ({location})
    </h1>
    <p>
      <EventDate startDate={startDate} endDate={endDate} />
    </p>
    <p>
      Website: <a href={url}>{url}</a>
    </p>
  </div>
);

export default Event;
