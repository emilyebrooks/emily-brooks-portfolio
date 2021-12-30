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