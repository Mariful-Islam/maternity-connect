// utils/dates.ts
export function getNext7Days() {
    const days = [];
    const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
  
      const day = {
        date: date.toISOString().split('T')[0], // e.g., '2025-05-18'
        weekday: weekdayNames[date.getDay()], // e.g., 'Sunday'
      };
  
      days.push(day);
    }
  
    return days;
  }
  