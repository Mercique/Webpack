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
        ${hours}:${minutes}:${seconds}
    `
}

export {printDateDiff, printError, printTimer}