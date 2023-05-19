const divs = document.querySelectorAll('div')
const link = document.querySelector('a')

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function(event) {
        event.stopPropagation() // handle the only one element from the list
        console.log(this.getAttribute('id'));
    }, false)
}

link.addEventListener('click', handleLinkClick)

function handleLinkClick(clickEvent) {
    console.log(clickEvent);
    clickEvent.preventDefault(); // cancel default behaviour (link is not open the page in this case)
    
    const div = divs[0]

    div.style.display = div.style.display === 'none' ? 'flex' : 'none'
}