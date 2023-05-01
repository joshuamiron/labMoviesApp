import React from "react";
import Pagination from '@mui/material/Pagination';

const setPage = (e, "page", value);


export default function PaginationUI({ page }) {
  return (
    <Pagination
      count={100}
      page={page}
      onChange={(event, value) => setPage(value)}
      size="large"
    />
  );
}
