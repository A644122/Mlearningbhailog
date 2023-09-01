// 

const  mains=document.querySelector("#main");
// console.log(mains);
const crcr=document.querySelector('#Cursor')
// console.log(crcr);
mains.addEventListener("mousemove",(e)=>{
    // console.log("heyyy........")
    console.log(e.y)
    crcr.style.left=e.x+ "px";
    crcr.style.top=e.y+ "px";


})