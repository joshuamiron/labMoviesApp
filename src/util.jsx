import truncate from "lodash/truncate";
import countries from 'countries-list';

export function excerpt(string) {
  return truncate(string, {
    length: 400, // maximum 400 characters
    separator: /,?\.* +/, // separate by spaces, including preceding commas and periods
  });
}

export function formatDate(dateString) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
}

/*export function getCountryName(countryCode) {
  return countries[props.countryCode].name;
}*/

export function getCountryName(countryCode) {
  if (Array.isArray(countryCode)) {
    return countryCode.map((code) => countries[code]?.name || code).join(", ");
  } else {
    return countries[countryCode]?.name || countryCode;
  }
}