import { ChevronDown, Minus } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import Hero from "../Hero";
import { ThreeDots } from "react-loader-spinner";

function WeatherLoadingState() {
  return (
    <main>
      <Hero />
      <div className="lg:grid grid-cols-4 gap-3">
        <section className="col-span-3 grid gap-5">
          {/* Weather Hero Skeleton Card */}
          <Skeleton className="w-full h-60 bg-(--neutral-800) text-(--neutral-300) flex flex-col justify-center items-center">
            <ThreeDots
              height="60"
              width="60"
              radius="9"
              color="#D3D3D3"
              ariaLabel="three-dots-loading"
              wrapperStyle={{ margin: "0 20px" }}
              wrapperClass="custom-loader"
              visible={true}
            />
            <p>Loading...</p>
          </Skeleton>
          {/* Weather Stats skeleton card */}
          <div className="grid grid-cols-2 my-4 gap-5 md:grid-cols-4">
            <Skeleton className="w-full h-25 bg-(--neutral-800) pl-4 flex flex-col justify-evenly">
              <h6 className="text-(--neutral-300) text-[18px]">Feels like</h6>
              <Minus aria-label="hidden" className="text-(--neutral-0)" />
            </Skeleton>
            <Skeleton className="w-full h-25 bg-(--neutral-800) pl-4 flex flex-col justify-evenly">
              <h6 className="text-(--neutral-300) text-[18px]">Humidity</h6>
              <Minus aria-label="hidden" className="text-(--neutral-0)" />
            </Skeleton>
            <Skeleton className="w-full h-25 bg-(--neutral-800) pl-4 flex flex-col justify-evenly">
              <h6 className="text-(--neutral-300) text-[18px]">Wind</h6>
              <Minus aria-label="hidden" className="text-(--neutral-0)" />
            </Skeleton>
            <Skeleton className="w-full h-25 bg-(--neutral-800) pl-4 flex flex-col justify-evenly">
              <h6 className="text-(--neutral-300) text-[18px]">
                Precipitation
              </h6>
              <Minus aria-label="hidden" className="text-(--neutral-0)" />
            </Skeleton>
          </div>

          {/* Daily forecast skeleton */}
          <div className="">
            <h2 className="text-(--neutral-200) text-lg font-semibold mb-3">
              Daily forecast
            </h2>
            <div className="grid grid-cols-3 gap-2 md:grid-cols-7">
              <Skeleton className="w-full h-35 bg-(--neutral-800)" />
              <Skeleton className="w-full h-35 bg-(--neutral-800)" />
              <Skeleton className="w-full h-35 bg-(--neutral-800)" />
              <Skeleton className="w-full h-35 bg-(--neutral-800)" />
              <Skeleton className="w-full h-35 bg-(--neutral-800)" />
              <Skeleton className="w-full h-35 bg-(--neutral-800)" />
              <Skeleton className="w-full h-35 bg-(--neutral-800)" />
            </div>
          </div>
        </section>

        {/* Hourly forecast */}
        <section className="bg-(--neutral-800) p-4 rounded-lg my-3">
          <div className="flex justify-between items-center">
            <h2 className="text-(--neutral-0) font-medium text-lg">
              Hourly forecast
            </h2>
            <div className="flex items-center gap-1 text-(--neutral-200) bg-(--neutral-600) px-3 py-1.5 rounded-lg hover:cursor-pointer">
              <Minus aria-label="hidden" />
              <ChevronDown aria-label="hidden" />
            </div>
          </div>
          <div className="space-y-3 mt-4">
            <Skeleton className="w-full h-12 bg-(--neutral-700) " />
            <Skeleton className="w-full h-12 bg-(--neutral-700) " />
            <Skeleton className="w-full h-12 bg-(--neutral-700) " />
            <Skeleton className="w-full h-12 bg-(--neutral-700) " />
            <Skeleton className="w-full h-12 bg-(--neutral-700) " />
            <Skeleton className="w-full h-12 bg-(--neutral-700) " />
            <Skeleton className="w-full h-12 bg-(--neutral-700) " />
            <Skeleton className="w-full h-12 bg-(--neutral-700) " />
          </div>
        </section>
      </div>
    </main>
  );
}
export default WeatherLoadingState;
