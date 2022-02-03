import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../apiRequests";

const CommentsSection = () => {
  const params = useParams();
  const [comments, setComments] = useState([]);
  const getComments = async () => {
    try {
      const comments = await axiosInstance.get(
        `/restaurants/${params.restaurantId}/comments`
      );
      console.log(comments);
    } catch (err) {
      console.log(err.response);
    }
  };
  useEffect(() => {
    getComments();
  }, []);

  return (
    <div style={{ marginTop: "1.5vh" }}>
      {comments.length ? <h2>Comments Section</h2> : null}
    </div>
  );
};

export default CommentsSection;
