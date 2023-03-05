import { useState } from "react";

const useFiltering = (data, filters) => {
  const [filterValues, setFilterValues] = useState(() => {
    const filterInitialValues = filters.map((f) => ({
      name: f.name,
      value: f.value,
    }));
    return filterInitialValues;
  });

  const filteringConditions = filters.map((f) => f.condition);
  const filterFunction = (collection) =>
    filteringConditions.reduce((data, conditionFn, index) => {
      return data.filter((item) => {
          return conditionFn(item, filterValues[index].value);
      });
    }, collection);

  return {
    filterValues,
    setFilterValues,
    filterFunction,
  };
};

export default useFiltering;
