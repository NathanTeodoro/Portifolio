
function Get(url){
    let request = new XMLHttpRequest()
    request.open("GET", url , false)
    request.send()
    return request.responseText
}
let input1=document.querySelector("#input1");

let input2=document.querySelector("#input2");

let input01

let input02

let urlparam

function changeSelect(input01,input02,urlparam){
    
     input01=input1.options[input1.selectedIndex].value
     input02 =input2.options[input2.selectedIndex].value

     urlparam=input01+input02

    console.log(input01,input02,urlparam)

    
    let brute = Get("https://economia.awesomeapi.com.br/last/"+input01+'-'+input02);

    let dados = JSON.parse(brute);
    function nodoc(){
        let result = document.getElementById("result")
        result.classList.remove("data-hide");
        result.classList.add("data-show");
        result.innerHTML = "CONVERSÂO: "+dados[urlparam].name+"<br>"+"ALTA: "+dados[urlparam].high+"<br>"+"BAIXA: "+dados[urlparam].low}      
 
    nodoc()
    
    console.log(input01,input02)
    return input01,input02,urlparam

 }
