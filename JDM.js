let slideIndex = [1, 1, 1, 1, 1, 1];//Keeps track of the current slide for each set of slides. Both sets start at the first slide.

let slideId = ["slide", "slide2", "slide3", "slide4", "slide5", "slide6"];/*Define ID of all 'slide pairs' used for indexing*/

//these are called on page load. This just sets the initial active image, to image one, on all slides
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);

//Is called by the buttons, n is the incrementation of the slide (1 or -1) no = the index of the slide pair, in the slideIndex array
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

/*Switches the slide to be shown, in each slide pair*/
function showSlides(n, no) {
  //Get's the elements of the slide that should be changed around. Done by getting the correct slideId, depending on the index that was given
  let x = document.getElementsByClassName(slideId[no]);

  //if the n is bigger than the amount of slides -> Go to the first slide
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  //if the n is less than the amount of slides -> Go to the last slide    
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  //Hide all slides
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  //Show the one we selected
  x[slideIndex[no] - 1].style.display = "block";
}