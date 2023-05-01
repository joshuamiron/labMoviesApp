import { useEffect, useState } from "react";
import { getTVShow } from '../api/tmdb-api'

const useTVShow = id => {
  const [tvShow, setTVShow] = useState(null);
  useEffect(() => {
    getTVShow(id).then(tv => {
      setTVShow(tv);
    });
  }, [id]);
  return [tvShow, setTVShow];
};

export default useTVShow
