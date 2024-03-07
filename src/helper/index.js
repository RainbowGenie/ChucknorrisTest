export const formatDate = (dateString) => {
  // Split the date string into day, month, and year
  const [day, month, year] = dateString.split("-");

  // Create a Date object
  const date = new Date(`${year}-${month}-${day}`);

  // Format the date
  const formattedDate = `${date.getDate() < 10 ? "0" : ""}${date.getDate()}.${
    date.getMonth() + 1 < 10 ? "0" : ""
  }${date.getMonth() + 1}.${date.getFullYear()}`;

  return formattedDate;
};
