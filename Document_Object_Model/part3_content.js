var headone=document.querySelector('one');
var headtwo=document.querySelector('#two');
var headthree=document.querySelector('#three');
headone.addEventListener('mouseover',function(){
  headone.textContent="Mouse Currently Over";
  headone.style.color='blue';
})
headone.addEventListener('mouseout',function(){
  headone.textContent="Hover over me";
  headone.style.color='black';
})
headtwo.addEventListener("click",function(){
  headtwo.textContent="CLICKED ON";
  headTwo.style.color='blue';
})
headthree.addEventListener('dbclick',function(){
  headthree.textContent='I was Double CLicked';
  headthree.style.color='red';
})
