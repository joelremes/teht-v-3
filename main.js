// const checkUppercase = () => document.getElementById("result").innerHTML = document.getElementById("sentence").value.toLowerCase().split(/\s+/g).map((w, i, a) => i !== 0 && i !== a.length - 1 && ["on", "in", "over", "from", "to", "with", "a", "an", "the", "and", "but", "or"].includes(w) ? w : w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

const resultText = document.getElementById("result");
const sentenceText = document.getElementById("sentence");

const wordList = ["on", "in", "over", "from", "to", "with", "a", "an", "the", "and", "but", "or"];

const checkText = () => {
    let words = sentenceText.value.toLowerCase().split(/\s+/g);

    for (let i = 0; i < words.length; i++) {
        if (!wordList.includes(words[i]) || i === 0 || i === words.length - 1) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        } 
    }
    
    resultText.innerHTML = words.join(" ");
}
