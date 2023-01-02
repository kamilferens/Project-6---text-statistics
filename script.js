const textArea = document.querySelector("#textarea");

textArea.addEventListener("input", onChange);

function onChange() {
    countCharacters();
    countWords();
    countSentences();
}

function countCharacters() {
    let textValue = textArea.value;
    const numCharacters = textValue.length;

    document.querySelector("#num-characters").innerHTML = numCharacters;
}

function countWords() {
    let textValue = textArea.value;

    let wordsArr = textValue.replace(/[\r\n]/g, " ").split(" ");
    wordsArr = wordsArr.filter((e) => e.length > 0);
    document.querySelector("#num-words").innerHTML = wordsArr.length;
    // console.log(wordsArr);
}

function countSentences() {
    let textValue = textArea.value;

    // let sentencesArr = textValue.replace(/[\r\n]/g, " ").split(/[.!?]/);
    let sentencesArr = textValue
        .replace(/([.?!])\s*(?=[A-Z])/g, "$1|")
        .split("|");

    // sentencesArr = sentencesArr.filter((e) => e !== "");
    document.querySelector("#num-sentences").innerHTML = sentencesArr.length;

    console.log(sentencesArr);
}
