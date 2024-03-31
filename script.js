const icon = document.getElementsByClassName("icon")

let ijs = document.querySelector(".a_javascript")
let ihtml = document.querySelector(".a_html")
let icss = document.querySelector(".a_css")
let inode = document.querySelector(".a_node")
let ipython = document.querySelector(".a_python")
let iangular = document.querySelector(".a_python")
let itypescript = document.querySelector(".a_python")
let iflask = document.querySelector(".a_python")
let imysql = document.querySelector(".a_python")
let imongodb = document.querySelector(".a_python")

const hidediv = "hidediv";
const showdiv = "showdiv";

let a_js = icon[0];
let a_typescript = icon[1]; 
let a_angular = icon[2];
let a_html = icon[3]; 
let a_css = icon[4]; 
let a_node = icon[5];
let a_python = icon[6];
let a_flask= icon[7];
let a_mysql = icon[8];
let a_mongodb = icon[9];

a_typescript.addEventListener('click', ()=>{
    itypescript.classList.toggle(showdiv)
});

a_angular.addEventListener('click', ()=>{
    iangular.classList.toggle(showdiv)
});

a_flask.addEventListener('click', ()=>{
    iflask.classList.toggle(showdiv)
});

a_mysql.addEventListener('click', ()=>{
    imysql.classList.toggle(showdiv)
});

a_mongodb.addEventListener('click', ()=>{
    imongodb.classList.toggle(showdiv)
});

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

