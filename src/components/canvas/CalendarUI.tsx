import React, { useState, useEffect } from 'react';
import './calendar.css'; // You’ll create custom CSS

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState<{ [key: string]: string }>({});
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [noteInput, setNoteInput] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000); // Updates every minute
    return () => clearInterval(interval);
  }, []);

  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const todayStr = date.toDateString();

  const handleDateClick = (d: number) => {
    const selected = new Date(date.getFullYear(), date.getMonth(), d).toDateString();
    setSelectedDate(selected);
    setNoteInput(notes[selected] || "");
  };

  const handleNoteSave = () => {
    if (selectedDate) {
      setNotes({ ...notes, [selectedDate]: noteInput });
      setSelectedDate(null);
    }
  };

  const vehicleImages = [
    'car1.jpg', 'car2.jpg', 'car3.jpg', 'car4.jpg',
    'car5.jpg', 'car6.jpg', 'car7.jpg', 'car8.jpg',
    'car9.jpg', 'car10.jpg', 'car11.jpg', 'car12.jpg',
  ];
  const backgroundImg = `/calendar/${vehicleImages[date.getMonth()]}`;

  return (
    <div className="calendar-container" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="calendar-header">
        {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
      </div>
      <div className="calendar-grid">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
          <div key={d} className="calendar-dayname">{d}</div>
        ))}
        {Array(firstDay).fill(null).map((_, i) => (
          <div key={`empty-${i}`} className="calendar-day empty" />
        ))}
        {[...Array(daysInMonth)].map((_, i) => {
          const d = i + 1;
          const fullDateStr = new Date(date.getFullYear(), date.getMonth(), d).toDateString();
          return (
            <div
              key={d}
              className={`calendar-day ${fullDateStr === todayStr ? 'today' : ''}`}
              onClick={() => handleDateClick(d)}
            >
              {d}
              {notes[fullDateStr] && <div className="note-dot" />}
            </div>
          );
        })}
      </div>

      {selectedDate && (
        <div className="calendar-note-modal">
          <h4>{selectedDate}</h4>
          <textarea
            value={noteInput}
            onChange={(e) => setNoteInput(e.target.value)}
            rows={4}
          />
          <button onClick={handleNoteSave}>Save</button>
          <button onClick={() => setSelectedDate(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Calendar;