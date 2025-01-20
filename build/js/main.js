const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)

    // Add word rotator sizing
    const words = document.querySelectorAll('.word')
    let maxWidth = 0
    words.forEach(word => {
        maxWidth = Math.max(maxWidth, word.offsetWidth)
    })
    document.querySelector('.word-rotator').style.width = maxWidth + 'px'
    document.querySelector('.word-rotator').style.height = words[0].offsetHeight + 'px'
}

document.addEventListener('DOMContentLoaded', initApp)