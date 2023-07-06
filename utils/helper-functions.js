export function returnDateArray({ startDate, endDate, step = 1 } = {}) {
  const dateArray = [];

  const currentDate = new Date(startDate);
  const endDateObj = new Date(endDate);

  while (currentDate <= endDateObj) {
    const clonedDate = new Date(currentDate);

    dateArray.push(clonedDate);

    currentDate.setDate(currentDate.getDate() + step);
  }

  return dateArray;
}

export function returnTimeArray({ startTime, endTime, step = 15 } = {}) {
  const timeArray = [];

  const currentTime = new Date(startTime);
  const endTimeObj = new Date(endTime);

  while (currentTime <= endTimeObj) {
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();

    const formattedTime = `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;

    timeArray.push(formattedTime);

    currentTime.setMinutes(currentTime.getMinutes() + step);
  }

  return timeArray;
}
