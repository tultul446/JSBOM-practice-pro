function greeting(){
    console.log("hey totol, welcome to hablu programmer");
}
setTimeout(greeting, 2000)

let counter = 0;
function counterUp(){
  counter ++;
  console.log(counter)  
}
setInterval(counterUp, 2000);





//location
//console.log(window.location)
console.log(window.location.protocol)

//part 4 navigator
//console.log(navigator.appName)
//console.log(navigator.appVersion)
//console.log(navigator.platform)

console.log(navigator.online);

if(navigator.online){
  console.log("you are online")
}else{
  console.log("you are offline")
}


