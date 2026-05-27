function HourlyForecastCard({
  weatherIcon,
  hour,
  deg,
}: {
  weatherIcon: string;
  hour: string;
  deg: string;
}) {
  return (
    <li className="flex justify-between items-center bg-(--neutral-700) text-(--neutral-0) px-2 py-1 rounded-xl">
      <div className="flex items-center gap-3">
        <span>
          <img className="w-16" src={weatherIcon} alt="" />
        </span>
        <h6 className="text-xl font-semibold">{hour}</h6>
      </div>

      <p className="mr-2 text-lg">{deg}</p>
    </li>
  );
}

export default HourlyForecastCard;
