import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import ReviewDetail from "./components/ReviewDetail";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container p-5">
        <ReviewDetail />
        <Form />
        <ListGroup />
        <ToastContainer />
      </div>
    </>
  );
};

export default App;
