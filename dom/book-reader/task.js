
const controls = Array.from(document.querySelectorAll('.font-size'));
const colors = Array.from(document.querySelectorAll('.color'));
const bookContent = document.querySelector('.book__content');
controls.forEach((control)=> {
    control.addEventListener('click', (event) => {
        bookContent.classList.remove('font-size_small');
        bookContent.classList.remove('font-size_big');
            event.preventDefault();
            const index = controls.indexOf(event.target);
            const activTarget = event.target;
            for (let i = 0; i < controls.length; i++) {
                controls[i].classList.remove('font-size_active');
            }
            controls[index].classList.add('font-size_active');
            if (activTarget.getAttribute('data-size') === 'small') {
                bookContent.classList.add('font-size_small');
            } else if (activTarget.getAttribute('data-size') === 'big') {
                bookContent.classList.add('font-size_big');
            }
        })
colors.forEach((color) => {
    color.addEventListener('click', (event)=> {
        event.preventDefault();
        const index = colors.indexOf(event.target);
        const activTarget = event.target;
        for (let i = 0; i < colors.length; i++) {
            colors[i].classList.remove('color_active');
        }
        colors[index].classList.add('color_active');
        if (activTarget.getAttribute('data-text-color') !== null) {
             bookContent.style.color = activTarget.getAttribute('data-text-color');
        }
        if (activTarget.getAttribute('data-bg-color') !== null) {
            bookContent.style.backgroundColor = activTarget.getAttribute('data-bg-color');
        }
    }
        )
    }
    )
    
})
