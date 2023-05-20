const icon = document.getElementsByClassName("icon")

let ijs = document.querySelector(".a_javascript")
let ihtml = document.querySelector(".a_html")
let icss = document.querySelector(".a_css")
let inode = document.querySelector(".a_node")
let ipython = document.querySelector(".a_python")

const showdiv = "showdiv"
const hidediv = "hidediv"

let a_js = icon[0];
let a_html = icon[1]; 
let a_css = icon[2];
let a_node = icon[3]; 
let a_python = icon[4]; 


a_js.addEventListener('click', ()=>{
    ijs.classList.add(showdiv)
    setTimeout(a_js.addEventListener('click', ()=>{
        ijs.classList.remove(showdiv)
    }),1)
   
});


a_html.addEventListener('click', ()=>{
    ihtml.classList.add(showdiv)
    setTimeout(a_html.addEventListener('click', ()=>{
        ihtml.classList.remove(showdiv)
    }),1)
});

a_css.addEventListener('click', ()=>{
    icss.classList.add(showdiv)
    setTimeout(a_css.addEventListener('click', ()=>{
        icss.classList.remove(showdiv)
    }),1)
});

a_node.addEventListener('click', ()=>{
    inode.classList.add(showdiv)
    setTimeout(a_node.addEventListener('click', ()=>{
        inode.classList.remove(showdiv)
    }),1)
});

a_python.addEventListener('click', ()=>{
    ipython.classList.add(showdiv)
    setTimeout(a_python.addEventListener('click', ()=>{
        ipython.classList.remove(showdiv)
    }),1)
});

