const handlerButtonMobile = () =>{
    const menu = document.querySelector('.menu');

    menu.classList.toggle('open')
    
}


document.querySelector('[data-btn-mobile]').addEventListener('click', handlerButtonMobile)