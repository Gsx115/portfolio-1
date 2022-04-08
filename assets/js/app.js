const body = document.querySelector('body');
const modalAboutMe = document.querySelector("#modal-about-me");
const container = document.querySelector('#container');

function initEventListeners(){
    // document.querySelector('#link-about-me').addEventListener('click',(e)=>{
    //     // toggleModal();
    //     e.preventDefault();
    // });

    body.addEventListener('click',(e)=>{
        let idList=['link-about-me','link-portfolio','link-contact'];
        if(idList.includes(e.target.id)){
            toggleModal();
            e.preventDefault();
        }
        else if(!modalAboutMe.classList.contains('hide')){
            toggleModal();
        }
    });

    modalAboutMe.addEventListener('transitionend', (e)=>{
        modalAboutMe.classList.remove('transition');
    });
}

function toggleModal(){
    modalAboutMe.classList.toggle('transition');
    modalAboutMe.clientWidth;
    modalAboutMe.classList.toggle('hide');
    container.classList.toggle('blur');
}

initEventListeners();

