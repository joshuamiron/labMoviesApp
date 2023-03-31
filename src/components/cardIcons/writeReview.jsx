import React from "react";
import IconButton from "@mui/material/IconButton";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const styles = {
  avatar: {
    //backgroundColor: "rgb(255, 0, 0, .50)",
  },
  IconButton: {
    backgroundColor: "white"
  },
};

const WriteReviewIcon = ({ movie }) => {
  return (
    <IconButton aria-label="write review">
      <Avatar sx={styles.avatar}>
        <Link to={'/reviews/form'} state={{movieId: movie.id,}}>
          <RateReviewIcon color="white" fontSize="medium" />
        </Link>
      </Avatar>
    </IconButton>
  );
};

export default  WriteReviewIcon;
