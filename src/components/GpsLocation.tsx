import { useContext } from "react";
import locationIcon from "../assets/images/icon-location.svg";
import DataContext from "@/context/DataContext";

function GpsLocation() {
  const {
    setLocation,
    setLocationInfo,
    setIsSearchFocused,
    setIsSearchSuggestionOpen,
  } = useContext(DataContext)!;

  async function getUserLocation(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (!("geolocation" in navigator)) return;

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const newLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        setLocation(newLocation);

        // Reverse geocode AFTER getting coords
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${newLocation.latitude}&lon=${newLocation.longitude}&format=json`,
        );

        try {
          if (res.ok) {
            const data = await res.json();

            const address = data.address;

            setLocationInfo({
              city:
                address.city ||
                address.town ||
                address.village ||
                address.county,

              country: address.country,
            });

            setIsSearchSuggestionOpen(false);
            setIsSearchFocused(false);

            console.log(newLocation);
          }
        } catch (error) {
          console.log(error);
        }
      },

      (error) => {
        console.log(error.message);
      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    );
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
