export const getAllEvents = async () => {
  const response = await fetch(
    "https://nextjs-course-8689e-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  const tmp = [];
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const element = data[key];
      tmp.push(element);
    }
  }

  return tmp;
};

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  return allEvents.filter((val) => val.isFeature);
};

export const getEventById = async (id) => {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
};

export async function getFilteredEvents(dateFilter) {
  const allEvents = await getAllEvents();
  const { year, month } = dateFilter;
  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() == year && eventDate.getMonth() == month;
  });
  return filteredEvents;
}
