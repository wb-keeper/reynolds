const getEvents = async () => {
  const res = await fetch("http://localhost:4000/events");
  return res.json();
};
async function Events(props) {
  const events = await getEvents();
  return <div></div>;
}

export default Events;
