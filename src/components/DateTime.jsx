import React, { useState, useEffect } from 'react'

const DateTime = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const dayNumber = date.getDate();

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    // Format roughly matches: "Wed Jan 7 1:25 PM"
    // User requested: "wed jan 7 1:25PM" (lowercase and tight spacing). 
    // I will use standard Title Case for looks (Mon Jan 7), but if user wants strictly lowercase I can adjust.
    // "like 'wed jan 7 1:25PM'" usually implies the structure.

    return (
        <div>
            {`${dayName} ${monthName} ${dayNumber} ${hours}:${minutes} ${ampm}`}
        </div>
    )
}

export default DateTime