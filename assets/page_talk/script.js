const input = document.querySelector("#text").value;
const btn = document.getElementById("t-button");

btn.addEventListener('click',()=>{
    let v = SpeechSynthesisUtterance(input)
    v.lan = 'pt-br'
    v.pitch = 2
    v.rate = 1

    new  speechSynthesis.speak(v)
    console.log(input)
});