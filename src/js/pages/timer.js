import {printError} from '../utils/print.js';
import { setTimer, stopTimer} from "../utils/setTimer.js";

const form = document.getElementById("timer");

form.onsubmit = (event) => {
    event.preventDefault();

    const time = document.getElementById('time').value * 60;

    if (time === undefined || time === 0) {
        printError('Ошибка, введите время!', 'outputTimer')

        return
    }

    setTimer(+time)

};

document.getElementById('stop').addEventListener('click', () => stopTimer())