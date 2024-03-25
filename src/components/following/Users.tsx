import React, { useEffect, useState } from "react";
import { User } from "./User.tsx";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (users.length === 0) {
      getUsers();
    }
  }, [users.length]);

  const getBreedNameFromUrl = (url) => {
    const urlObject = new URL(url);
    const pathParts = urlObject.pathname.split("/");
    const breedName = pathParts[pathParts.length - 2];
    const formattedBreedName = breedName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return formattedBreedName;
  };

  const getBreedNameFromUrlNSpecialSymbol = (url) => {
    const urlObject = new URL(url);
    const pathParts = urlObject.pathname.split("/");
    const breedName = pathParts[pathParts.length - 2];
    const formattedBreedName = breedName.replace(/-/g, "").toLowerCase();
    return formattedBreedName;
  };

  const getUsers = async () => {
    const temp = [];
    try {
      for (let index = 0; index < 9; index++) {
        const response = await axios.get(
          "https://dog.ceo/api/breeds/image/random"
        );
        temp.push(response.data.message);
      }
      if (temp.length === 9) {
        setUsers(temp);
      }
    } catch (error) {
      console.error("Error fetching dog images:", error);
    }
  };

  if (users.length)
    return (
      <div className="flex flex-wrap items-center gap-4 mx-auto w-[800px] my-4">
        {users.length > 0 &&
          users.map((item) => (
            <User
              imageName={item}
              userName={getBreedNameFromUrl(item)}
              id={getBreedNameFromUrlNSpecialSymbol(item)}
            />
          ))}
      </div>
    );
  else
    return (
      <div className="h-full flex justify-center items-center">
        <CircularProgress />
      </div>
    );
};
