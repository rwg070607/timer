let hour = ''
let minute = ''
let second = ''

function timer() {
    hour = new Date().getHours();
    minute = new Date().getMinutes();
    second = new Date().getSeconds();
    if (hour.toString().length==1) {
        hour = `0${new Date().getHours()}`;
    }
    if (minute.toString().length==1) {
        minute = `0${new Date().getMinutes()}`;
    }
    if (second.toString().length==1) {
        second = `0${new Date().getSeconds()}`;
    }
    document.querySelector('.time').innerHTML = `${hour}:${minute}:${second}`;
}

timer()
setInterval(timer, 1000)