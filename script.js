document.addEventListener('DOMContentLoaded', (event) => {
    let timer;
    let seconds = 0;
    let running = false;

    const display = document.getElementById('display');
    const startStopButton = document.getElementById('startStopBtn');
    const resetButton = document.getElementById('resetBtn');
    const lapButton = document.getElementById('lapBtn');
    const laps = document.getElementById('laps');

    startStopButton.addEventListener('click', () => {
        if (running) {
            clearInterval(timer);
            startStopButton.textContent = 'Start';
        } else {
            timer = setInterval(updateTime, 1000); // Update the time every second
            startStopButton.textContent = 'Stop';
        }
        running = !running;
    });

    resetButton.addEventListener('click', () => {
        clearInterval(timer);
        running = false;
        seconds = 0;
        display.textContent = '00:00:00';
        startStopButton.textContent = 'Start';
        laps.innerHTML = ''; // Clear the lap times
    });

    lapButton.addEventListener('click', () => {
        if (running) {
            const hrs = Math.floor(seconds / 3600);
            const mins = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;
            const lapTime = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
            const lapItem = document.createElement('li');
            lapItem.textContent = lapTime;
            laps.appendChild(lapItem);
        }
    });

    function updateTime() {
        seconds++;
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        display.textContent = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
    }

    function pad(num) {
        return num < 10 ? '0' + num : num;
    }
});
