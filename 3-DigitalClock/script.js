// const clock = document.querySelector('#clock');
// console.log(localTime);

/* ----------------- Solution -> 1 ---------------------------------->

const localTime = new Date().toLocaleTimeString();
const addtime = document.createElement('span');
addtime.style.fontSize = "40px";
addtime.innerText = `${localTime}`;

document.getElementById('clock').appendChild(addtime);

---------------------- Solution -> 1 --------------------------------*/

/* if we want to referes the time in a fixedtime period, we can use setInterval( function, timePeriod) , [timePeriod -> milliseconds]*/
setInterval(() => {
    const currentTime = new Date().toLocaleTimeString();
    console.log(currentTime);
    
    document.getElementById('clock').innerHTML = `<span>${currentTime}</span>`;
}, 1000)