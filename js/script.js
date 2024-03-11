const logo = document.getElementById('logo');
const menuLateral = document.getElementById('menu-lateral');
const darkModeToggle = document.getElementById('darkModeToggle');

logo.addEventListener('click', ()=>{
    menuLateral.classList.toggle('hidden')
    menuLateral.classList.toggle('absolute')
})

darkModeToggle.addEventListener('click', ()=>{
    event.preventDefault();
    document.documentElement.classList.toggle('dark');
})


// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
     document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'
    
// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'
    
// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')

