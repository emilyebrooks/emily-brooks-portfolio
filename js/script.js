//SET UP SCROLL TO TOP BUTTON

//Get the scrollButton: 
topButton = document.getElementById("scrollButton");

//When user scrolls down 20px from top of page, show button
window.onscroll = function() {scrollFunction()}; 

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block"; 
    } else {
        topButton.style.display = "none"; 
    }
}
//When user clicks button, scroll to top of page
function topFunction() {
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE and Opera
}

//Q&A WITH EMILY FEATURE

// Grab the more button element
const showMore = document.querySelector("#more-button");
// console.log(showMore); 

// Click more button to reveal entire Q&A section (.qa-dropdown)
showMore.addEventListener("click", function() { 
    const dropdown = document.querySelector(".qa-dropdown"); 
    // console.log(dropdown); 
    dropdown.classList.toggle("show-dropdown");
});

//Grab the open-icon element
const btns = document.querySelectorAll(".qa-buttons");
console.log(btns); 

// Click open icon to reveal answer to single question
btns.forEach(function (btn) {
    btn.addEventListener("click", function(e) {
        const toggleAnswer = e.currentTarget.parentElement.parentElement; 
        // console.log(toggleAnswer); 
        toggleAnswer.classList.toggle("show-answer");
});
});

// Set auto Date in Footer
const date = document.getElementById("date");
  date.innerHTML = new Date().getFullYear(); 
