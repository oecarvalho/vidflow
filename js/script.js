const logo = document.getElementById('logo');
const menuLateral = document.getElementById('menu-lateral');


console.log(menuLateral)

logo.addEventListener('click', ()=>{
    menuLateral.classList.toggle('hidden')
    menuLateral.classList.toggle('absolute')
})