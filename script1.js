let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
            })
        }
    })
}

document.getElementById("github").addEventListener("click", function () {
    window.open("https://github.com/SushmaMahankali", "_blank"); // Replace with your LinkedIn URL
});

document.getElementById("linkedin").addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/sushma-mahankali-a697151a2/", "_blank"); // Replace with your LinkedIn URL
});





menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}