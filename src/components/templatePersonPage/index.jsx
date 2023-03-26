import React from "react"; 
//import Header from "../headerMovieList";
import PersonHeader from "../headerPerson";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getPersonImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import { Person } from "@mui/icons-material";

const styles = {
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: '100vh',
  },
};

const TemplatePersonPage = ({ person, children }) => {
  const {data, error, isLoading, isError} = useQuery(
    ["images", {id: person.id}],
    getPersonImages,
  );

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data.profiles

  return (
    <>
      <PersonHeader person={person} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3} sx={styles.media}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
            alt={images.profile_path}
            style={{maxWidth: "100%"}}
          />
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplatePersonPage;
