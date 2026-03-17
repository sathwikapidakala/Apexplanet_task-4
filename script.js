// Smooth scroll to projects

function scrollToProjects(){

document.getElementById("projects").scrollIntoView({
behavior:"smooth"
});

}


// Contact form message

document.getElementById("contactForm")
.addEventListener("submit",function(e){

e.preventDefault()

alert("Message sent successfully! 🚀")

})