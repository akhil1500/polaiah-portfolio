/**
 * Calculates the number of years of experience from a given start date.
 * @param {string} startDate - Career start date in "YYYY-MM-DD" format
 * @returns {string} - e.g. "7+" or "8+"
 */
export const getYearsOfExperience = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();
  const years = (now - start) / (1000 * 60 * 60 * 24 * 365.25);
  return `${Math.floor(years)}`;
};

/**
 * Calculates years and months of experience from a given start date.
 * @param {string} startDate - Career start date in "YYYY-MM-DD" format
 * @returns {string} - e.g. "8 years 3 months"
 */
export const getTotalExperience = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years} year${years !== 1 ? "s" : ""} ${months} month${months !== 1 ? "s" : ""}`;
};