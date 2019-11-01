var s=prompt("what's you first name")
var lastname=prompt("what's your last name?")
var age=prompt("what's your age?")
var height=prompt("What's your height?")
var pet=prompt("what's your pet name?")
if(s[0]==lastname[0] && age>=20 && age<=30 && height>=170 && pet[pet.length-1]=="y")
    console.log("congrats you have passed the spy test");
else {
      console.log("sorry you have not passed.")
}
