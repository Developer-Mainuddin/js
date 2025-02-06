function show(){
  document.querySelector("#myimage").style.display="block";
}

document.getElementById("imgbtn").addEventListener("click",show);

function para(){
  document.querySelector("#accordion p").style.display="block";
}

document.getElementById("toggleh").addEventListener("click",para);

function tops(){
  document.querySelector("#imgTop").style.display="block";
}

document.getElementById("btn1").addEventListener("click",tops);

function bottoms(){
  document.querySelector("#imgBottom").style.display="block";
}

document.getElementById("btn2").addEventListener("click",bottoms);

function tips(){
  document.querySelector("#hide").style.display="block";
}

document.getElementById("tip").addEventListener("click",tips);


