import React from "react";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";

const ListGroup = () => {
  const { feedbacks } = useSelector((state) => state.feedbacks);

  if (feedbacks.length === 0) {
    return <h1 className="display-6 text-center my-2">No Feedbacks Yet..</h1>;
  }

  return (
    <ul className="list-group my-3">
      {feedbacks.map((feedback) => (
        <ListItem key={feedback.id} feedback={feedback} />
      ))}
    </ul>
  );
};

export default ListGroup;
