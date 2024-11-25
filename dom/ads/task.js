let rotateElement = document.querySelector('.rotator__case');
rotateElement.style.color = rotateElement.getAttribute('data-color')
const rotator = setInterval (()=> {
    setTimeout(()=> {
        rotateElement.classList.remove('rotator__case_active');
        rotateElement = rotateElement.nextElementSibling;
        if (rotateElement !== null) {
            rotateElement.style.color = rotateElement.getAttribute('data-color')
            rotateElement.classList.add('rotator__case_active');
            
        } else {
            rotateElement = document.querySelector('.rotator__case');
            rotateElement.classList.add('rotator__case_active');  
        }
    }, rotateElement.getAttribute('data-speed') - 1000)
    console.log(rotator)
}, 1000)
 //Понимаю, что очень костыльно, но не понимаю как по-другому :'(