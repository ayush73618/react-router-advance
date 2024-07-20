import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router";

function Events() {
  const fetchedEvents = useLoaderData();

  return (
    <>
      <EventsList events={fetchedEvents.events} />
    </>
  );
}

export default Events;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Link is not working correctly" }),
      { status: 500 }
    );
  } else {
    return response;
  }
}
