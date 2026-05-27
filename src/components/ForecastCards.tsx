function ForecastCards({
  day,
  weatherImg,
  deg1,
  deg2,
}: {
  day: string;
  weatherImg: string;
  deg1: string;
  deg2: string;
}) {
  return (
    <div className="bg-(--neutral-800) rounded-lg p-4 text-lg text-(--neutral-0) space-y-2">
      <h6 className="text-center font-medium">{day}</h6>
      <span className="block my-3">
        <img className="w-16 mx-auto" src={weatherImg} alt="" />
      </span>
      <div className="flex justify-between">
        <p>{deg1}</p>
        <p className="text-(--neutral-300)">{deg2}</p>
      </div>
    </div>
  );
}

export default ForecastCards;
