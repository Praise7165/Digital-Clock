
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octomber", "November", "December"];







const digitalClock = function() {

    let todaysDate = new Date();


    let hour = todaysDate.getHours();
    let minute = todaysDate.getMinutes();
    let getDay = todaysDate.getDay();
    let getMonth = todaysDate.getMonth();
    let getDate = todaysDate.getDate();
    let getYear = todaysDate.getFullYear();





    let time = "", period = "";
    getDay = days[getDay];
    getMonth = months[getMonth];



    let elementMain = document.querySelector("main");
    if ((hour >= 19) || (hour < 7)) {
        elementMain.classList.remove("light");
        elementMain.classList.add("dark");
    }

    console.log(hour);


    hour >= 12 ? period += "pm" : period += "am";
    hour > 12 ? hour = hour - 12 : hour = hour;
    minute < 10 ? time = `:0${minute}` + time : time = `:${minute}` + time;
    hour < 10 ? time = `0${hour}` + time : time = `${hour}` + time;



    let elementDay = document.querySelector(".day");
    let elementDate = document.querySelector(".date");
    let elementTime = document.querySelector(".time");
    

    elementDay.innerText = `${getDay}, ${period}`;
    elementDate.innerText = `${getMonth} ${getDate}, ${getYear}`;
    elementTime.innerText = time;





    console.log(period);

}


// setInterval(function, interval(ms));    repeated after every interval
// setTimeout(function, interval);    // called only once


setInterval(digitalClock, 1000);




