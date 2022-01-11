let i = 0;

        let box1 = document.getElementById("image1");
        let box2 = document.getElementById("image2");
        let box3 = document.getElementById("image3");
        let a1 = document.querySelector(".a1");
        let a2 = document.querySelector(".a2");
        let a3 = document.querySelector(".a3");
        let info = document.getElementById("info");

        a1.onclick = function () {
            box1.style.opacity = 1;
            box2.style.opacity = 0;
            box3.style.opacity = 0;
            info.innerHTML = "image1"
            i = 0;
        }

        a2.onclick = function () {
            box1.style.opacity = 0;
            box2.style.opacity = 1;
            box3.style.opacity = 0;
            info.innerHTML = "image2"
            i = 1;
        }

        a3.onclick = function () {
            box1.style.opacity = 0;
            box2.style.opacity = 0;
            box3.style.opacity = 1;
            info.innerHTML = "image3"
            i = 2;
        }

       
        document.addEventListener("keydown", (e) => {
            if (e.keyCode == 37) {
                right();
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.keyCode == 39 ) {
                right();
            }
        });
//function for right arrow funcationality, 
        function right() {
            if (i == 0) {
                box1.style.opacity = 1;
                box2.style.opacity = 0;
                box3.style.opacity = 0;
                info.innerHTML = "Image 1"
                i++
            }
            else if (i == 1) {
                box1.style.opacity = 0;
                box2.style.opacity = 1;
                box3.style.opacity = 0;
                info.innerHTML = "Image 2"
                i++
            }
            else if (i == 2) {  
                box1.style.opacity = 0;
                box2.style.opacity = 0;
                box3.style.opacity = 1;
                info.innerHTML = "Image 3"
                i = 0
            }
        }
// function for left button on image slider. 
        function left() {
            if (i == 0) {
                box1.style.opacity = 0;
                box2.style.opacity = 0;
                box3.style.opacity = 1;
                info.innerHTML = "Image 1"
                i++
            }
            else if (i == 1) {
                box1.style.opacity = 0;
                box2.style.opacity = 1;
                box3.style.opacity = 0;
            
                info.innerHTML = "Image 2"
                i++
            }
            else if (i == 2) {
                box1.style.opacity = 1;
                box2.style.opacity = 0;
                box3.style.opacity = 0;
                info.innerHTML = "Image 3"
                i = 0 
            }
        }







// // link track variable to .carousel__track in HTML
// const track = document.querySelector('.carousel__track');
// // link slides varibale to the children(other photos) .carousel__track 
// const slides = Array.from(track.children);
// // connnecting right arrow to function as next button 
// const nextBotton = document.querySelector('.carousel__button--right');
// // connnecting left arrow to function as previous button 
// const prevButton = document.querySelector('.carousel__button--left');
// //assign the dots buttons to a variable to use them 
// const dotsNav = document.querySelector('.carousel__nav');
// const dots = Array.from(dotsNav.children);

// const slideWidth = slides[0].getBoundingClientRect().width;

// // function to put imgs next to each other & envoke function  
// const setSlidePosition = (slide, index) => {
//   slide.style.left = slideWidth * index + 'px';
// }
// slides.forEach(setSlidePosition); 

// const moveToSlide = (track, currentSlide, goalSlide) => {
//   track.style.transform = 'translateX(-' + goalSlide.style.left +')';
//   currentSlide.classList.remove('current-slide');
//   goalSlide.classList.add('current-slide');
// }
 
// const updateDots = (currentDot, goalDot) => {
//   currentDot.classList.remove('.current-slide');
//   goalDot.classList.add('current-slide');
// }

// const hideShowArrows = (slides, prevButton,nextBotton,targetIndex) =>{


// if (targetIndex === 0 ){
//   prevButton.classList.add('is-hidden');
//   nextBotton.classList.remove('is-hidden');
// } else if(targetIndex === slide.length -1 ){
//   prevButton.classList.remove('is-hidden');
//   nextBotton.classList.add('is-hidden');
// } else {
//   prevButton.classList.remove('is-hidden')
//   nextBotton.classList.remove('is-hidden')
// }
// }

// // right button function 
// nextBotton.addEventListener('click', e => {
//   const currentSlide = track.querySelector('.current-slide');
//   const nextSlide = currentSlide.nextElementSibling;
//   const currentDot = dotsNav.querySelector('.current-slide')
//   const nextDot = currentDot.nextElementSibling;
//   const nextIndex = slides.findIndex(slide => slide === nextSlide);

//   //move to next slide 
//   moveToSlide(track,currentSlide,nextSlide);
//   updateDots(currentDot,nextDot)
//   hideShowArrows(slides.prevButton,nextBotton,nextIndex)
// });


// //left button fuction 
// prevButton.addEventListener('click', e => {
//   const currentSlide = track.querySelector('.current-slide');
//   const prevSlide = currentSlide.previousElementSibling;
//   const currentDot = dotsNav.querySelector('.current-slide')
//   const prevDot = currentDot.previousElementSibling;
//   const prevIndex = slides.findIndex(slide => slide === prevSlide);


// moveToSlide(track, currentSlide, prevSlide);
// updateDots(currentDot,prevDot)
// hideShowArrows(slides.prevButton,nextBotton,prevIndex)
// })

// //indicator button funtion 
// dotsNav.addEventListener('click', e =>{
//   const goalDot = e.goal.closest('button')

// if (!goalDot) return; 
// const currentSlide = track.querySelector('.current-slide');
// const currentDot = dotsNav.querySelector('.current-slide');
// const targetIndex = dots.findIndex(dot => dot === goalDot)
// const goalSlide = slides[targetIndex];

// moveToSlide(track, currentSlide, targetIndex)
// updateDats(currentDot, goalDot)
// hideShowArrows = (slides, prevButton,nextBotton,targetIndex)
// })



// //contact button
// const form = document.querySelector("form"),
// statusTxt = form.querySelector(".button-area span");
// form.onsubmit = (e)=>{
//   e.preventDefault();
//   statusTxt.style.color = "#0D6EFD";
//   statusTxt.style.display = "block";
//   statusTxt.innerText = "Sending your message...";
//   form.classList.add("disabled");
//   let xhr = new XMLHttpRequest();
//   xhr.open("POST", "message.php", true);
//   xhr.onload = ()=>{
//     if(xhr.readyState == 4 && xhr.status == 200){
//       let response = xhr.response;
//       if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
//         statusTxt.style.color = "red";
//       }else{
//         form.reset();
//         setTimeout(()=>{
//           statusTxt.style.display = "none";
//         }, 3000);
//       }
//       statusTxt.innerText = response;
//       form.classList.remove("disabled");
//     }
//   }
//   let formData = new FormData(form);
//   xhr.send(formData);
// }