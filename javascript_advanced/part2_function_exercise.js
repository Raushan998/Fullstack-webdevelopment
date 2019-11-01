function sleepingin(ans1,ans2){
    if(ans1===false && ans2==false)
        return true;
    else if(ans1===true && ans2===false)
         return false;
    else if(ans1===false && ans2===true)
          return true;
}
function monkeyTrouble(ans1,ans2){
      if(ans1===true && ans2===true)
           return true;
      else if(ans1===false && ans2===false)
            return false;
      else if(ans1===true && ans2===false)
           return false;
}
function stringtimes(a,num){
      var s=a**num;
      return s;
}
function luckysum(a,b,c){
     if(a==13)
        return 0;
    else if(b==13)
         return a;
    else if(c==13)
         return a+b;
    else {
         return (a+b+c);
    }
}
function caught_speeding(speed,is_birthday){
     if(speed<=60 || is_birthday)
          return 0;
      else if(speed>60 && speed<=80 && is_birthday){
           speed-=5;
           if(speed<=60)
               return 0;
            else {
                return 1;
            }
      }
      else if(speed>60 && speed<=80 && is_birthday===false)
          return 1;
      else if(speed>80)
          return 2;
}
