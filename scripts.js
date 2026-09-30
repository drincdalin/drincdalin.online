let copyBtn = document.getElementById("copy");
let body = document.body;


function copy(){
    navigator.clipboard.writeText("dalin.drinc.contact@gmail.com");
    copyBtn.textContent = "Copied!";
    copyBtn.style.padding= "9px 12px";
    setTimeout(() =>{
        copyBtn.innerHTML="<span style='font-size: 1.1em; margin: 0; margin-right: 3px'>&#8617;</span> Copy";
        copyBtn.style.padding= "5px 10px";
    }, 2000);
}

function switchTheme(){
    body.classList.toggle("lightmode");
}