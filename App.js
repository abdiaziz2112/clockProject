
let today = new Date();
let hourNow = today.getHours();
let minuteNow = today.getMinutes();
let secondNow = today.getSeconds();

var all = hourNow + ":" + minuteNow + ":" + secondNow;
//document.write('<h2 class="time" >' + all + '</h2>');

let timeNow = today.getHours();

let display;


if (timeNow > 18){
  display = "Fiidnimo Wanaagsan !";
}
else if (timeNow > 12 ){
  display = "Galab wanaagsan !";
}
else if (timeNow > 0 ){
  display = "Subax wanaagsan!";
}

else{
  display = "Welcome bro";
}

document.write('<h3 class="time">' + display + '</h3>')



      