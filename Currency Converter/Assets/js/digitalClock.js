function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    document.getElementById("digitalClock").innerHTML = hour + ":" + min + ":" + sec;
    var t = setTimeout(function() { currentTime() }, 1000);
    
}

currentTime();