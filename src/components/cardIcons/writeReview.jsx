import React from "react";
import IconButton from "@mui/material/IconButton";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Link } from "react-router-dom";

const WriteReviewIcon = ({ movie }) => {
  return (
    <IconButton aria-label="write review">
      <Link to={'/reviews/form'} state={{ movieId: movie.id, }}>
        <RateReviewIcon color="primary" fontSize="medium" />
      </Link>
    </IconButton>
  );
};

export default WriteReviewIcon;
