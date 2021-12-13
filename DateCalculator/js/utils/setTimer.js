import {printTimer} from "./print.js";

let timer;

export function setTimer (time) {
    timer = setInterval(() => {
        if (time === 0) {
            clearInterval(timer)
            const sound = new Howl({
                src: ['media/end.mp3']
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

export function stopTimer () {clearInterval(timer)}