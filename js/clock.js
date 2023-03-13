const clock = document.querySelector("div#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const Minutes = String(date.getMinutes()).padStart(2,"0");

    clock.innerText = `${hours} : ${Minutes}`;
}

getClock(); // 로딩하자마자 바로 시간이 나오게
setInterval(getClock, 1000); // 이것만 있으면 1초 후부터 시간이 표시