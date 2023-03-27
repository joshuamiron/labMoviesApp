import truncate from "lodash/truncate";

export function excerpt(string) {
  return truncate(string, {    
    length: 400, // maximum 400 characters
    separator: /,?\.* +/, // separate by spaces, including preceding commas and periods
  });
}

export function formatDate(dateString) {
  const options = {year: "numeric", month: "short", day: "numeric"};
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
}