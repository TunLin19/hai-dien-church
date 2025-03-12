function EventCard({ title, time, date }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-holy-gold">
      <h3 className="text-xl font-serif text-holy-blue">{title}</h3>
      <p className="mt-2 text-gray-600">Thời gian: {time}</p>
      <p className="text-gray-600">Ngày: {date}</p>
    </div>
  );
}

export default EventCard;
