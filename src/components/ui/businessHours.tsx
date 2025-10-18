"use client";

import { useState, useEffect } from "react";

// Data structure for business hours
const businessHours = [
  { day: "Sunday", open: "11:00 AM", close: "4:00 PM" },
  { day: "Monday", open: "11:00 AM", close: "4:00 PM" },
  { day: "Tuesday", open: "11:00 AM", close: "4:00 PM" },
  { day: "Wednesday", open: "11:00 AM", close: "4:00 PM" },
  { day: "Thursday", open: "11:00 AM", close: "5:00 PM" },
  { day: "Friday", open: "11:00 AM", close: "4:00 PM" },
  { day: "Saturday", open: "11:00 AM", close: "5:00 PM" },
];

/**
 * A component that displays business hours, dynamically showing only the current day
 * and the current open/closed status.
 */
export function BusinessHours() {
  const [currentDayIndex, setCurrentDayIndex] = useState<number>(
    new Date().getDay()
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const dayIndex = now.getDay();
      setCurrentDayIndex(dayIndex);

      const todayHours = businessHours[dayIndex];
      if (!todayHours) {
        setIsOpen(false);
        return;
      }

      const [openHour, openMinute] = todayHours.open.split(/:| /).map(Number);
      const [closeHour, closeMinute] = todayHours.close
        .split(/:| /)
        .map(Number);

      const openTime = new Date();
      openTime.setHours(
        todayHours.open.includes("PM") && openHour !== 12
          ? openHour + 12
          : openHour,
        openMinute,
        0,
        0
      );

      const closeTime = new Date();
      closeTime.setHours(
        todayHours.close.includes("PM") && closeHour !== 12
          ? closeHour + 12
          : closeHour,
        closeMinute,
        0,
        0
      );

      setIsOpen(now >= openTime && now <= closeTime);
    };

    checkStatus();
    // Check the status every minute
    const interval = setInterval(checkStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  const currentStatusText = isOpen ? "We're Open!" : "We're Closed";
  const currentStatusColor = isOpen
    ? "bg-green-100 text-green-800"
    : "bg-red-100 text-red-800";

  // Get today's hours to display
  const todayHours = businessHours[currentDayIndex];

  return (
    <div className="text-center bg-secondary/90 p-1">
      <h3 className="text-lg font-bold mb-2">Business Hours</h3>
      <div
        className={`text-sm font-semibold mb-4 px-3 py-1 rounded-full inline-block ${currentStatusColor}`}
      >
        {currentStatusText}
      </div>

      <div className=" text-sm opacity-90">
        {todayHours && (
          <div
            key={todayHours.day}
            className="flex gap-2 justify-center  rounded-md bg-primary/10"
          >
            <span className="font-bold text-primary">{todayHours.day}</span>
            <span className="font-bold text-primary">
              {todayHours.open} - {todayHours.close}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default BusinessHours;