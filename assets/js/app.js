const body = document.querySelector('body');
const modalAboutMe = document.querySelector("#modal-about-me");
const container = document.querySelector('#container');
const expUL = document.querySelector('#experience');

function initEventListeners(){
    body.addEventListener('click',(e)=>{
        let idList=['link-about-me','link-portfolio','link-contact'];
        if(idList.includes(e.target.id)){
            toggleModal();
            e.preventDefault();
            highlightExp();
        }
        else if(!modalAboutMe.classList.contains('hide')){
            toggleModal();
        }
    });




    modalAboutMe.addEventListener('transitionend', (e)=>{
        modalAboutMe.classList.remove('transition');
    });

    function highlightExp() {
        let lis = Array.from(expUL.children);
        lis.forEach((li)=>{
            let strArray = li.innerHTML.split('-');
            let highlightTxt = '<span class="highlight"> &mdash; </span>';
            li.innerHTML = strArray.join(highlightTxt);
        })
    }
}

function toggleModal(){
    modalAboutMe.classList.toggle('transition');
    modalAboutMe.clientWidth;
    modalAboutMe.classList.toggle('hide');
    container.classList.toggle('blur');
}

initEventListeners();

