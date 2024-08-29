const tabsNavigation = document.getElementById('tabs1')
const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));
tabs.forEach((tab)=> {
tab.addEventListener('click', (event) => {
        const index= tabs.indexOf(event.target)
        for (let i = 0; i < tabs.length; i++) {
           tabs[i].classList.remove('tab_active')
           tabsContent[i].classList.remove('tab__content_active')
        }
        tabs[index].classList.add('tab_active')
        tabsContent[index].classList.add('tab__content_active')
    })
    
})
