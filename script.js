window.onload = function() {
    setInterval(function() {
        var now = new Date();

        var hourse = now.getHours();
        if (hourse < 9) hourse = '0' + hourse;

        var minutes = now.getMinutes();
        if (minutes < 9) minutes = '0' + minutes; 

        var seconds = now.getSeconds();
        if (seconds < 9) seconds = '0' + seconds; 

        document.getElementById('hourse').innerHTML = hourse;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
    }, 1000);
};