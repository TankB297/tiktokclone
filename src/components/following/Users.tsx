import React, { useEffect, useState } from "react";
import { User } from "./User.tsx";
import axios from "axios";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (users.length === 0) {
      getUsers();
    }
  }, [users.length]);

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

  return (
    <div className="flex flex-wrap items-center gap-4 mx-auto w-[800px] my-4">
      {users.length > 0 && users.map((item) => <User imageName={item} />)}
    </div>
  );
};
