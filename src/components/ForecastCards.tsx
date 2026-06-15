function ForecastCards({
  day,
  weatherIcon,
  max,
  min,
}: {
  day: string;
  weatherIcon: string;
  max: string;
  min: string;
}) {
  return (
    <div className="bg-(--neutral-800) rounded-lg p-4 text-lg text-(--neutral-0) space-y-2 border border-(--neutral-600)">
      <h6 className="text-center font-medium">{day}</h6>
      <span className="block my-3 text-4xl flex justify-center">
        {weatherIcon}
      </span>
      <div className="flex justify-between">
        <p>{max}</p>
        <p className="text-(--neutral-300)">{min}</p>
      </div>
    </div>
  );
}

export default ForecastCards;
