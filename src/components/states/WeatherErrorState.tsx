import { Ban, RefreshCw } from "lucide-react";

function WeatherErrorState() {
  return (
    <section className="mt-15 py-4 flex flex-col items-center gap-1.5">
      <Ban size={36} aria-label="hidden" className="text-(--neutral-300)" />
      <h1 className="text-(--neutral-0) text-2xl md:text-4xl font-semibold font-bricolage my-2">
        Something went wrong
      </h1>
      <p className="text-(--neutral-300) text-center text-sm font-medium w-1/2">
        We couldn't connect to the server (API error). Please try again in a few
        moments.
      </p>
      <button
        type="button"
        className="bg-(--neutral-800) text-(--neutral-200) mt-1 px-1.5 py-1 rounded-sm text-sm flex items-center justify-center gap-1 hover:cursor-pointer"
      >
        <RefreshCw size={12} aria-label="hidden" />
        Retry
      </button>
    </section>
  );
}
export default WeatherErrorState;
