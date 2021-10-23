const cards = document.querySelectorAll('.card')

cards.forEach(card => {
    card.addEventListener('click', () => {
        removeActiveClasses()
        card.classList.add('active')
    })
})

//Function to remove active classes
function removeActiveClasses() {
    cards.forEach(card => {
        card.classList.remove('active')
    })
}