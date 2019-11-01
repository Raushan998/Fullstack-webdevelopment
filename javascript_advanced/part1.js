function timeFive(numInput){
  var result=numInput*5;
  return result;
}
///global scope
var v="Global V";
var stuff="Global stuff";
function fun(stuff){
      console.log(v);
      stuff="Reassign stuff inside func";
      console.log(stuff);
}
fun()
console.log(stuff);
