import React from 'react';
//import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';


const styles = {
  root: {
    display: 'flex',
    justifyContent: "center",
    '& > * + *': {
      marginLeft: 2,
    },
  },
};

export default function CircularIndeterminate() {

  return (
    <div sx={styles.root}>
      <LinearProgress />
      <LinearProgress />
    </div>
  );
}
