let windowOdj =  document.querySelector("#openNewWindow");
let closeWindow =  document.querySelector("#closeWindow");

let myWindow;
windowOdj.addEventListener("click", ()=>{
myWindow = window.open("https://www.hablu-programmer.com/dashboard/jfsd/1/module-16-javascript-bom-browser-object-model/video/2-js-bom-alert-confirm-message", "Hablu programmer", "self", "width=300px, height=200px")  
});

closeWindow.addEventListener("click", ()=>{
    myWindow.close()
});
alert('Hello programmer')

let deleteMe = document.querySelector("#deleteMe");

deleteMe.addEventListener("click", ()=>{
    userConfirmation = confirm("Are your sure want to delete the file?")

    if(userConfirmation){
        alert("item deleted")
    }
    else{
        alert("item is not delete")
    }
})


//part 3 prompt

let askMe = document.querySelector("#askMe");
askMe.addEventListener("click", ()=>{
    let username = prompt("Please Enter Your Name");
if(username !== null && username !==""){
    alert("Hello " + username +  " Welcome To Hablu Programmer")
}
else{
  alert("no name entered")  
}

})




