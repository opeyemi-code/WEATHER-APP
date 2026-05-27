import ForecastCards from "./ForecastCards";
import weatherIcon from "../assets/images/icon-storm.webp";

function ForecastGrid() {
  return (
    <section className="my-3 md:mb-0">
      <h2 className="text-(--neutral-200) text-lg font-semibold mb-3">
        Daily forecast
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
        <ForecastCards
          day="Tue"
          weatherImg={weatherIcon}
          deg1="68&deg;"
          deg2="57&deg;"
        />
        <ForecastCards
          day="Tue"
          weatherImg={weatherIcon}
          deg1="68&deg;"
          deg2="57&deg;"
        />
        <ForecastCards
          day="Tue"
          weatherImg={weatherIcon}
          deg1="68&deg;"
          deg2="57&deg;"
        />
        <ForecastCards
          day="Tue"
          weatherImg={weatherIcon}
          deg1="68&deg;"
          deg2="57&deg;"
        />
        <ForecastCards
          day="Tue"
          weatherImg={weatherIcon}
          deg1="68&deg;"
          deg2="57&deg;"
        />
        <ForecastCards
          day="Tue"
          weatherImg={weatherIcon}
          deg1="68&deg;"
          deg2="57&deg;"
        />
        <ForecastCards
          day="Tue"
          weatherImg={weatherIcon}
          deg1="68&deg;"
          deg2="57&deg;"
        />
      </div>
    </section>
  );
}

export default ForecastGrid;
