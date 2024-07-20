import React from "react";
import { useLoaderData, useParams, useRouteLoaderData } from "react-router";
import EventItem from "../components/EventItem";

const EventDetails = () => {
  const data = useRouteLoaderData("event-detail");
  return (
    <>
      <EventItem event={data.event} />
    </>
  );
};

export default EventDetails;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Link is not working correctly" }),
      { status: 500 }
    );
  } else {
    return response;
  }
}
