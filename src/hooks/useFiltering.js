import { useState } from "react";

/* const useFiltering = (data, filters) => {
  const [filterValues, setFilterValues] = useState(() => {
    const filterInitialValues = filters.map((f) => ({
      name: f.name,
      value: f.value,
    }));
    return filterInitialValues;
  }); */

  const useFiltering = (data, filters, sortKey) => {
    const [filterValues, setFilterValues] = useState(() => {
      const filterInitialValues = filters.map((f) => ({
        name: f.name,
        value: f.value,
      }));
      return filterInitialValues;
    });
    
  /*const filteringConditions = filters.map((f) => f.condition);
  const filterFunction = (collection) =>
    filteringConditions.reduce((data, conditionFn, index) => {
      return data.filter((item) => {
          return conditionFn(item, filterValues[index].value);
      });
    }, collection);*/

    const filteringConditions = filters.map((f) => f.condition);
    const filterFunction = (collection) =>
      filteringConditions.reduce((data, conditionFn, index) => {
        return data.filter((item) => {
          return conditionFn(item, filterValues[index].value);
        });
      }, collection).sort((a, b) => {
        if (a[sortKey] < b[sortKey]) {
          return -1;
        }
        if (a[sortKey] > b[sortKey]) {
          return 1;
        }
        return 0;
      });

  return {
    filterValues,
    setFilterValues,
    filterFunction,
  };
};

export default useFiltering;
