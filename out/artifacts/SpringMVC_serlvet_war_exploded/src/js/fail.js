const wait = document.getElementById("wait");

window.onload = function () {
        let time = 5;
        const intervalId = setInterval(function () {
            wait.innerHTML = "默默等待......^_^ " + time + " 秒";
            time--;
            if (time === -1) {
                clearInterval(intervalId);
                location.href = "http://localhost:8080/RegisterTable/index.html";
            }
        }, 1000);

    }