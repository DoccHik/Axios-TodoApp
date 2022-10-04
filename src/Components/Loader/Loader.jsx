import React from "react";

import "./Loader.css";

import CircularProgress from "@mui/material/CircularProgress";
const Loader = () => {
  return (
    <>
      <div className="loader">
        <CircularProgress color="success" />
        <small>Подождите, идет загрузка сервера..</small>
      </div>
    </>
  );
};

export default Loader;
