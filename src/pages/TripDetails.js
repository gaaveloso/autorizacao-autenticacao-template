import axios from "axios";
import { useEffect } from "react";
import useProtectedPage from "../hooks/useProtectedPage";

const TripDetails = () => {

  useProtectedPage();

  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel/trip/3Vk92Q3owiwwPXi83O9W",
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <p>TripDetails</p>
    </>
  );
};

export default TripDetails;
