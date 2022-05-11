const btnClose = document.querySelector(".close");
const btnOpen = document.querySelector('.mobile-menu-open');
const overlay = document.querySelector(".overlay");
btnClose.addEventListener('click',()=>{
    document.querySelector(".nav-without-logo").style.display="none";
    
})
btnOpen.addEventListener('click',()=>{
    document.querySelector(".nav-without-logo").style.display="flex";
    overlay.style.display="flex"
})
