const body = document.querySelector('body');
const container = document.querySelector('#container');
const expUL = document.querySelector('#experience');
const modalList = document.querySelectorAll('.modal');

function initEventListeners(){
    body.addEventListener('click',(e)=>{
        modalList.forEach((modal)=>{
            if(!modal.classList.contains('hide')){
                toggleModal(modal);
            }
        });
        
        let idList=['link-about-me','link-portfolio','link-services','link-contact'];
        if(idList.includes(e.target.id)){
            targetModal = `#modal-${e.target.id.slice(5)}`;
            toggleModal(document.querySelector(targetModal));
            e.preventDefault();
            highlightExp();
        }
        
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

function toggleModal(modal){
    modal.classList.toggle('transition');
    modal.clientWidth;
    modal.classList.toggle('hide');
    container.classList.toggle('blur');

    modal.addEventListener('transitionend', (e)=>{
        modal.classList.remove('transition');
    });
}

initEventListeners();

