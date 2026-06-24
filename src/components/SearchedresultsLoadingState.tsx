import { Spinner } from "./ui/spinner";

function SearchedresultsLoadingState() {
  return (
    <div className="pl-1.5 text-(--neutral-0) text-sm flex gap-2">
      <Spinner />
      <h6>Search in progress</h6>
    </div>
  );
}
export default SearchedresultsLoadingState;
