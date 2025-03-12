import EventCard from "../components/EventCard";

function Events() {
  const events = [
    { title: "Lễ Chúa Nhật", time: "7:00 AM", date: "Mỗi Chủ nhật" },
    { title: "Rửa tội tập thể", time: "9:00 AM", date: "20/03/2025" },
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-serif text-holy-blue text-center">
        Lịch sự kiện
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
}

export default Events;
