
function onEntry( entry) {
   entry.forEach( change => {
      if( change.isIntersecting){
         change.target.classList.add('element_show')
      }
      console.log(change);
   })
}

// show cards left
let optionsLeft = { threshold: [0.5] };
let observerLeft = new IntersectionObserver(onEntry, optionsLeft);
let elementsLeft = document.querySelectorAll('.hiden_left');
for (let elm of elementsLeft) {
   observerLeft.observe(elm);
}

// show cards right
  
let optionsRight = { threshold: [0.5] };
let observerRight = new IntersectionObserver(onEntry, optionsRight);
let elementsRight = document.querySelectorAll('.hiden_right');
for (let elm of elementsRight) {
  observerRight.observe(elm);
}