import {printTimer} from "./print.js";

export function setTimer (time) {
     window.timerID = setInterval(() => {
        if (time === 0) {
            clearInterval(timerID)
            const sound = new Howl({
                src: ['sound.mp3']
            });

            sound.play();
        }

        let seconds = Math.trunc(time % 60)
        let minutes = Math.trunc(time / 60 % 60)
        let hours = Math.trunc(time / 3600)

        printTimer({seconds, minutes, hours}, 'outputTimer')

        time--
    }, 1000);

}

export function stopTimer () {clearInterval(timerID)}