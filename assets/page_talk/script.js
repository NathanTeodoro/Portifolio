const input = document.querySelector("#text");
const btn = document.getElementById("t-button");
const btn2 = document.getElementById("l-button");
const pitch = document.getElementById("pitch");
const volume = document.getElementById("volume");
const rate = document.getElementById("rate");

btn.addEventListener('click',()=>{
    var v = new SpeechSynthesisUtterance(input.value)
    v.lang = 'pt-PT'
   
    v.pitch = pitch.value
    v.volume = volume.value
    v.rate = rate.value

    speechSynthesis.speak(v)

   
});

btn2.addEventListener('click',()=>{
    let r = new SpeechRecognition()
    
    let t = new SpeechRecognitionAlternative.transcipt
    console.log(t)
});