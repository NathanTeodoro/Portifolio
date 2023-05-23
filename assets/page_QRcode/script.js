const image = document.querySelector("img")
const box = document.querySelector(".box")
const btn = document.querySelector(".btn")
const size = document.querySelector(".size")
let res 
btn.addEventListener('click',(res)=>{
    image.style.display='block'
    image.src = 'https://api.qrserver.com/v1/create-qr-code/?size='+`${size.value}`+'x'+`${size.value}`+'&data='+`${box.value}`
})
