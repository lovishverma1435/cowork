import { useRef, useState } from "react";
import dayjs from "dayjs";
import "../../index.css"
const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

// Utility: Generate calendar days for the given month
const generateCalendarDays = (monthDate, disableBeforeToday = false) => {
  const startOfMonth = monthDate.startOf("month");
  const endOfMonth = monthDate.endOf("month");

  const days = [];
  const startDay = startOfMonth.day(); // 0-6

  // Add empty slots for alignment
  for (let i = 0; i < startDay; i++) days.push(null);

  for (let d = 1; d <= endOfMonth.date(); d++) {
    const dayDate = monthDate.date(d);
    if (disableBeforeToday && dayDate.isBefore(dayjs(), "day")) {
      days.push("disabled");
    } else {
      days.push(d);
    }
  }

  return days;
};

// Calendar Month Component
const MonthView = ({
  monthDate,
  fromDate,
  toDate,
  onSelectDate,
  disablePastDates,
  showNextArrow,
  onNext,
  cssclass
}) => {
  const days = generateCalendarDays(monthDate, disablePastDates);

  const isInRange = (day) => {
    if (!day || day === "disabled" || !fromDate || !toDate) return false;
    const current = monthDate.date(day);
    return current.isAfter(fromDate) && current.isBefore(toDate);
  };

  const isSelected = (day) => {
    if (!day || day === "disabled") return false;
    const current = monthDate.date(day).format("YYYY-MM-DD");
    return (
      fromDate?.format("YYYY-MM-DD") === current ||
      toDate?.format("YYYY-MM-DD") === current
    );
  };

  return (
    <div className="w-[337px] font-inter">
      <div className={` ${cssclass} flex w-[217px] justify-between ml-auto  items-center mb-[30px]`}>
        <div className="text-start font-normal text-[16px] leading-[150%]">
          {monthDate.format("MMMM YYYY")}
        </div>
        {showNextArrow && (
          <button className="cursor-pointer" onClick={onNext}>
            <img src="/svg/arrowright.svg" alt="arrowright" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-7 text-start w-full text-xs leading-[150%] text-dark-gray mb-[30px]">
        {weekdays.map((d) => (
          <div className="w-full mx-auto" key={d}>
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-[30px] gap-x-[2px]">
        {days.map((day, index) => {
          if (day === "disabled") {
            return (
              <div
                key={index}
                className="h-[16px] mx-auto w-full cursor-pointer line-through flex text-start  rounded-full text-[12px] font-normal leading-[150%] text-gray-400"
              >
                {monthDate.date(index - monthDate.startOf("month").day() + 1).date()}
              </div>
            );
          }

          const date = day ? monthDate.date(day) : null;

          return (
            <div
              key={index}
              className={`h-[16px] mx-auto flex  w-full text-start  rounded-full text-[12px] font-normal leading-[150%]
                ${day ? " cursor-pointer " : ""}
                ${isSelected(day) ? "gradient-text" : ""}
                ${isInRange(day) ? "gradient-text " : ""}`}
              onClick={() => day && day !== "disabled" && onSelectDate(date)}
            >
              {day || ""}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Main Component
const SimpleDoubleCalendar = () => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [startMonth] = useState(dayjs()); // Current month
  const [secondMonth, setSecondMonth] = useState(dayjs().add(1, "month"));

  const inputRef = useRef();

  const handleDateClick = (date) => {
    if (!fromDate || (fromDate && toDate)) {
      setFromDate(date);
      setToDate(null);
    } else if (date.isBefore(fromDate)) {
      setFromDate(date);
    } else {
      setToDate(date);
    }
  };

  const handleNextMonth = () => {
    setSecondMonth((prev) => prev.add(1, "month"));
  };

  return (
    <>
    <section>

    <div className=" ">
      <h2 className="text-[20px] font-semibold text-[#222] mb-2">
        Select check-in date
      </h2>
      <p className="text-[16px] text-[#717171] mb-8">
        Add your travel dates for exact pricing
      </p>

      <div className="flex gap-[86px]">
        <MonthView
          monthDate={startMonth}
          fromDate={fromDate}
          toDate={toDate}
          onSelectDate={handleDateClick}
          disablePastDates={true}
          showNextArrow={false}
        />
        <MonthView
          monthDate={secondMonth}
          fromDate={fromDate}
          toDate={toDate}
          onSelectDate={handleDateClick}
          showNextArrow={true}
          onNext={handleNextMonth}
          cssclass={"mr-[32px]"}
        />
      </div>

      <div className="mt-8 flex justify-between items-center gap-6 text-sm text-gray-700">
        <button
          onClick={() => inputRef.current.focus()}
          className="flex items-center cursor-pointer gap-2 hover:opacity-80"
        >
          <img
            src="/svg/keyboard.svg"
            alt="Keyboard Icon"
            className="w-5 h-5"
          />
        </button>

        <button
          onClick={() => {
            setFromDate(null);
            setToDate(null);
          }}
          className="text-[14px] cursor-pointer font-normal font-inter text-[#000000] leading-[150%] hover:underline pr-7"
        >
          Clear dates
        </button>
      </div>

      {/* // Hidden input for keyboard control
      <input
        type="text"
        ref={inputRef}
        className="absolute opacity-0 pointer-events-none"
      /> */}
    </div>
    </section>
    </>
  );
};

export default SimpleDoubleCalendar;