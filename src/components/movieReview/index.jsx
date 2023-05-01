import { Typography } from "@mui/material";
import React from "react";

const MovieReview = ({ review }) => {
  return (
    <>
      <Typography variant="h5" component="h3">
        Review By: {review.author}
      </Typography>

      <Typography variant="h6" component="p">
        {review.content}
      </Typography>
    </>
  );
};

export default MovieReview
