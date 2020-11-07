import React, { useEffect, useState } from "react";

function Weather() {
  const [location, setLocation] = useState({ lat: "", long: "" });
  const getUserBrowserLocation = () => {
    if ("geolocation" in navigator) {
      // check if geolocation is supported/enabled on current browser
      navigator.geolocation.getCurrentPosition(
        function success(position) {
          // for when getting location is a success

          const locationObject = {
            lat: position.coords.latitude,
            long: position.coords.longitude,
          };
          setLocation(locationObject);
        },
        function error(error_message) {
          // for when getting location results in an error
          console.error(
            "An error has occured while retrievinglocation",
            error_message
          );
        }
      );
    } else {
      // geolocation is not supported
      // get your location some other way
      console.log("geolocation is not enabled on this browser");
    }
  };
  useEffect(() => {
    getUserBrowserLocation();
  }, []);
  useEffect(() => {
    console.log("location changed");
  }, [location]);

  return <div>sssdsd</div>;
}

export async function getStaticProps(context) {
  const res = await fetch("https://.../posts");
  const posts = await res.json();
  console.log(posts);
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Weather;
