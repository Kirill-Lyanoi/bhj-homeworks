let dropdown = document.querySelector(".dropdown");
let dropdownList = document.querySelector(".dropdown__list");
const dropdownLinks = Array.from(document.querySelectorAll(".dropdown__link"));

function dropDownActive () {
    dropdownList.classList.toggle("dropdown__list_active")
  
};
dropdown.addEventListener("click", dropDownActive);

dropdownLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault()
        const targetItem = e.target; 
        const linkItem = targetItem.closest('.dropdown__item')
         if (linkItem === null) {
            e.stopPropagation()
        } else {
        document.querySelector(".dropdown__value").textContent = targetItem.textContent
        }
    })
})


