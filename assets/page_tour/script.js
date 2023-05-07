const t = document.querySelectorAll('[data-anima]');
const animationClass = 'animate';

function animeScroll(){
    const wtop = window.scrollY
    t.forEach(function(e){
       if(wtop > (e.offsetTop - 300) ){
        e.classList.add(animationClass)
       }
       if(wtop < (e.offsetTop - 530) ){
        e.classList.remove(animationClass)
       }
    })
}
window.addEventListener('scroll', () =>{
    animeScroll()
})