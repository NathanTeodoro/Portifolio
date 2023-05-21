const icon = document.getElementsByClassName("icon")

let ijs = document.querySelector(".a_javascript")
let ihtml = document.querySelector(".a_html")
let icss = document.querySelector(".a_css")
let inode = document.querySelector(".a_node")
let ipython = document.querySelector(".a_python")

const hidediv = "hidediv";
const showdiv = "showdiv";

let a_js = icon[0];
let a_html = icon[1]; 
let a_css = icon[2];
let a_node = icon[3]; 
let a_python = icon[4]; 


a_js.addEventListener('click', ()=>{
    ijs.classList.toggle(showdiv)
});


a_html.addEventListener('click', ()=>{
   ihtml.classList.toggle(showdiv)
});

a_css.addEventListener('click', ()=>{
   icss.classList.toggle(showdiv)
});

a_node.addEventListener('click', ()=>{
    inode.classList.toggle(showdiv)
});

a_python.addEventListener('click', ()=>{
    inode.classList.toggle(showdiv)
});

