const modalAboutMe = document.querySelector("#modal-about-me");

function initEventListeners(){
    document.querySelector('#link-about-me').addEventListener('click',(e)=>{
        modalAboutMe.classList.toggle('hide');
        e.preventDefault();
    });
    modalAboutMe.addEventListener('click',(e)=>{
        modalAboutMe.classList.toggle('hide');
    });
}

initEventListeners();

