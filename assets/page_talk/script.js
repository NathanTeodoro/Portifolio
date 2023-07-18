const input = document.querySelector("#text");
const btn = document.getElementById("t-button");
btn.addEventListener('click',()=>{
    let v = new SpeechSynthesisUtterance(input.value)
    v.lan = 'pt-br'
    v.pitch = 1
    v.volume = 0.5
    speechSynthesis.speak(v)
    console.log(input.value)
});