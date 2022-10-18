window.onload = init();

function init(){
document.getElementsByClassName("menu-toggle")[0].onclick = show;
}

function show(){
console.log(document.getElementsByTagName('nav')[0].className);
if(document.getElementsByTagName('nav')[0].className === "menu"){
    document.getElementsByTagName('nav')[0].className += " active";
}
else if(document.getElementsByTagName('nav')[0].className === "menu active"){
    document.getElementsByTagName('nav')[0].className = "menu";
}
}