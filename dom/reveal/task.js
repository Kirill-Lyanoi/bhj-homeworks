const revealBlock = Array.from(document.getElementsByClassName('reveal'));
console.log(revealBlock)
window.addEventListener('scroll', ()=> {
    revealBlock.forEach(element => {
        const viewportHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < viewportHeight) {
   element.classList.toggle('reveal_active')
        }
        if (elementTop > 0) {
            element.classList.toggle('reveal_active')
        }; 
    });
    
})

