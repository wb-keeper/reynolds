import EventBox from "@/Components/events/EventBox";

const getEvents = async () => {
  const res = await fetch("http://localhost:4000/events");
  return res.json();
};
async function Events(props) {
  const events = await getEvents();
  return (
    <section className="section" id="tours">
      <div className="container mx-auto">
        <EventBox events={events} />
      </div>
    </section>
  );
}

export default Events;
