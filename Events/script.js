 const SelectUl= document.querySelector('#contain');

SelectUl.addEventListener('click',((e)=>{
    // console.log(e)
    console.log(e.target);
    console.log(e.target.parentNode);
    let rem=e.target.parentNode;
    rem.remove();

}))