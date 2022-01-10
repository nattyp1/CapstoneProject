// link track variable to .carousel__track in HTML
const track = document.querySelector('.carousel__track');
// link slides varibale to the children(other photos) .carousel__track 
const slides = Array.from(track.children);
// connnecting left arrow to function as next button 
const nextBotton = document.querySelector('.carousel__button--left');
// connnecting left arrow to function as previous button 
const prevButton = document.querySelector('.carousel__button--right');

const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;


slides[0].style.left = slideWidth * 0 + 'px';
slides[1].style.left = slideWidth * 1 + 'px';
slides[2].style.left = slideWidth * 2 + 'px';