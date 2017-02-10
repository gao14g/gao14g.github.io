function showDate() {
  var todaysDate = new Date();
  var dateElement = document.querySelector("#todays-date");
  dateElement.innerHTML = todaysDate.toDateString();
}
