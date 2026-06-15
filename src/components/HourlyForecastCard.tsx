function HourlyForecastCard({
  weatherIcon,
  hour,
  dayTime,
  deg,
}: {
  weatherIcon: string;
  hour: string;
  dayTime: string;
  deg: string;
}) {
  return (
    <li className="flex justify-between items-center bg-(--neutral-700) text-(--neutral-0) px-2 py-2 border border-(--neutral-600) rounded-xl">
      <div className="flex items-center gap-3">
        <span className="text-3xl">{weatherIcon}</span>
        <h6 className="text-lg medium">
          {hour}{" "}
          <abbr
            className="no-underline"
            title={dayTime === "AM" ? "Ante Meridiem" : "Post Meridiem"}
          >
            {dayTime}
          </abbr>
        </h6>
      </div>

      <p className="mr-2 text-lg">{deg}</p>
    </li>
  );
}

export default HourlyForecastCard;
