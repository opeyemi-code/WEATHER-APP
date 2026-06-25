import { useContext } from "react";
import locationIcon from "../assets/images/icon-location.svg";
import DataContext from "@/context/DataContext";
import useOpenStreetMap from "@/context/UseOpenStreetMap";

function GpsLocation() {
  const { location, setLocation, setLocationInfo } = useContext(DataContext)!;
  const { data: reverseGeocoding } = useOpenStreetMap();

  function getUserLocation(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { address } = reverseGeocoding;
          const newLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.latitude,
          };

          setLocation(newLocation);
          setLocationInfo({
            city:
              address.city || address.town || address.village || address.county,
            country: address.country,
          });
          console.log(newLocation, location, address);
        },
        (error) => {
          console.log("Permission denied:", error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        },
      );
    }
  }

  return (
    <button
      className="flex items-center gap-2 hover:cursor-pointer w-full"
      onClick={getUserLocation}
      type="button"
    >
      <span>
        <img className="w-4 h-auto" src={locationIcon} alt="Gps image" />
      </span>
      <h6 className="text-(--neutral-0)">Current Location</h6>
    </button>
  );
}
export default GpsLocation;
