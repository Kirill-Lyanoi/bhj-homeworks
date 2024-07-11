let startTimerValue = document.getElementById("timer").innerHTML;

let interval = setInterval(function() {
    if (startTimerValue < 1) {
        clearInterval(interval);
        alert('Вы победили в конкурсе!')
    } else {
    startTimerValue--;
    document.getElementById("timer").innerHTML = startTimerValue;
    }
}, 1000);
