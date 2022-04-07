const modalAboutMe = document.querySelector("#modal-about-me");

function initEventListeners(){
    document.querySelector('#link-about-me').addEventListener('click',(e)=>{
        modalAboutMe.classList.toggle('transition');
        modalAboutMe.clientWidth;
        modalAboutMe.classList.toggle('hide');
        e.preventDefault();
    });

    modalAboutMe.addEventListener('click',(e)=>{
        modalAboutMe.classList.toggle('hide');
    });

    modalAboutMe.addEventListener('transitionend', (e)=>{
        console.log('done');
        modalAboutMe.classList.remove('transition');
    });
}



initEventListeners();

