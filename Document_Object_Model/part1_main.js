var header=document.querySelector("h1");
header.style.color='red'
function getRandomcolor(){
      var letters="0123456789ABCDEF";
      var color='#';
      for(var i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
      }
      return color;
}
function changeHeaderColor(){
    colorInput=getRandomcolor();
    header.style.color=colorInput;
}
setInterval("changeHeaderColor()",500);
