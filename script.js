const checkbox = document.querySelector('.checkbox')

checkbox.checked = false
function clickHandler() {
    if (this.checked) {
        document.body.classList.remove('light)')
        document.body.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    } else {
        document.body.classList.add('light')
        document.body.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    }
}

checkbox.addEventListener('click', clickHandler)

window.onload = checktheme()

function checktheme() {
    const localStorageTheme = localStorage.getItem('theme')

    if (localStorageTheme !== null && localStorageTheme === 'dark') {
        document.body.className = localStorageTheme
        const checkbox = document.querySelector('.checkbox')
        checkbox.checked = true
    }
}
