import sunnyIcon from "../assets/images/icon-sunny.webp";

function HeroWeatherCard() {
  return (
    <div className="heroWeatherCard__bgImg md:flex items-center">
      <div className="w-[80%] mx-auto pt-10 md:flex justify-between items-center">
        <div className="text-center mb-5">
          <h2 className="text-(--neutral-200) text-3xl font-semibold">
            Berlin, Germany
          </h2>
          <p className="text-(--neutral-300) text-sm">
            Tuesday, August 5, 2025
          </p>
        </div>
        <div className="flex items-center gap-5">
          <span className="">
            <img className="w-28" src={sunnyIcon} alt="Sunny" />
          </span>
          <p className="text-7xl font-bricolage font-semibold text-(--neutral-0)">
            68&deg;
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroWeatherCard;
