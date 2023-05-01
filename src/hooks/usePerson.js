import { useEffect, useState } from "react";
import { getPerson } from '../api/tmdb-api'

const usePerson = id => {
  const [person, setPerson] = useState(null);
  useEffect(() => {
    getPerson(id).then(person => {
      setPerson(person);
    });
  }, [id]);
  return [person, setPerson];
};

export default usePerson
