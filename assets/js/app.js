const body = document.querySelector('body');
const container = document.querySelector('#container');
const expUL = document.querySelector('#exp-list');
const modalList = document.querySelectorAll('.modal');

// Initialize Event Listeners
function initEventListeners(){

    // Click Event for Entire Body
    body.addEventListener('click',(e)=>{

        // Checking to see if any modal is visible to toggle visibility
        modalList.forEach((modal)=>{
            if(!modal.classList.contains('hide')){
                toggleModal(modal);
            }
        });

        // list of link ids
        let idList=['link-about-me','link-portfolio','link-services','link-contact'];

        // Checking to see if click event occurred on any modal links
        // to toggle modal visibility
        if(idList.includes(e.target.id)){
            targetModal = `#modal-${e.target.id.slice(5)}`;
            toggleModal(document.querySelector(targetModal));
            e.preventDefault();
            highlightExp();
        }
        
    });
}

// Function to replace all dashes with em dash currently in just 
// experience
function highlightExp() {
    let lis = Array.from(expUL.children);
    lis.forEach((li)=>{
        li.innerHTML = li.innerHTML.replaceAll('-','<span class="highlight"> &mdash; </span>');
    })
}

// Function to toggle the passed modal
function toggleModal(modal){
    modal.classList.toggle('transition');
    modal.clientWidth;
    modal.classList.toggle('hide');
    container.classList.toggle('blur');

    modal.addEventListener('transitionend', (e)=>{
        modal.classList.remove('transition');
    });
}

// Function call to initialize event listeners
initEventListeners();

