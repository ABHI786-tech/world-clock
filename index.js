
function updateClock(){
const Time = new Date ();
console.log(Time)

let hours = Time.getHours();
let minutes = Time.getMinutes();
let seconds = Time.getSeconds();

// console.log(hours)
// console.log(minutes)
// console.log(seconds)

 const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}
    setInterval(updateClock, 1000);
  updateClock();
  