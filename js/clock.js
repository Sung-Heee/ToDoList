const clock = document.querySelector("h2#clock");
const day = document.querySelector("h2#day");


function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); //padstart()가 동작하는 원리는 String이 가져야하는 길이를 2로 설정, 아니라면 문자 앞에 0을 추가
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getDay()
{
    const date2 = new Date();
    const year = String(date2.getFullYear()); // 년도
    const month = String(date2.getMonth() + 1).padStart(2, "0");  // 월
    const date = String(date2.getDate()).padStart(2, "0");  // 날짜
    day.innerText = `${year}/${month}/${date}`;
}
getClock();
setInterval(getClock, 1000);

getDay();
setInterval(getDay, 10000000);

