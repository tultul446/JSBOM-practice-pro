const screenInfo = document.querySelector("#screenInfo");

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const screenAvailWidth = window.screen.availWidth;
const screenAvailHeight = window.screen.availHeight;

screenInfo.innerHTML = `
<strong>Screen Width:${screenWidth}px</strong><br>
<strong>Screen height:${screenHeight}</strong><br>

<strong>Screen screenAvailWidth:${screenAvailWidth}</strong><br>

<strong>Screen screenAvailWidth:${screenAvailWidth}px</strong>
`



console.log(window.screen.width);



