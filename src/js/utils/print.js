function printError(errorText, el) {
    let resultParagraph = document.getElementById(el);

    resultParagraph.innerHTML = `
        <span style="color: red;">
            ${errorText}
        </span>
    `
}

function printDateDiff({years, months, days}, el) {
    let resultParagraph = document.getElementById(el)

    resultParagraph.innerHTML = `
        Годы: ${years}
        Месяцы: ${months}
        Дни: ${days}
    `
}

function printTimer({seconds, minutes, hours}, el) {
    let resultParagraph = document.getElementById(el)

    resultParagraph.innerHTML = `
        ${printNums(hours)}:${printNums(minutes)}:${printNums(seconds)}
    `
}

function printNums(num) {
    if (num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

export {printDateDiff, printError, printTimer}