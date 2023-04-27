import axios from "axios";
import moment from "moment";
import React, { useEffect } from "react";
import { useState } from "react";
import { base_url } from "../environment";

const Comment = ({ comment }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(base_url + `/user/${comment.userId}`);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);
  console.log(comment);
  return (
    <div>
      <div className="mt-4 border px-4 py-2 rounded-2xl">
        <h1 className="text-xs text-gray-500 font-serif">
          {user && user.fullName}
        </h1>
        <h1 className="font-medium font-serif mt-2">
          {comment && comment.comment}
        </h1>
        <h1 className="text-[8px] text-gray-500 font-serif">
          {moment(comment && comment.createdAt).format("MMM Do YYYY")}
        </h1>
      </div>
    </div>
  );
};

export default Comment;
