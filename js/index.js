// show main cards
function onEntry( entry) {
   entry.forEach( change => {
      if( change.isIntersecting){
         change.target.classList.add('element_show') // added class for main cards
         change.target.classList.add('show_card') // added class for footer cards
      }
      // console.log(change);
   })
}

// show main cards left
let optionsLeft = { threshold: [0.5] };
let observerLeft = new IntersectionObserver(onEntry, optionsLeft);
let elementsLeft = document.querySelectorAll('.hiden_left');
for (let elm of elementsLeft) {
   observerLeft.observe(elm);
}

// show main cards right
  
let optionsRight = { threshold: [0.5] };
let observerRight = new IntersectionObserver(onEntry, optionsRight);
let elementsRight = document.querySelectorAll('.hiden_right');
for (let elm of elementsRight) {
  observerRight.observe(elm);
}

// show footer cards 
let optionsFooter = { threshold: [0.5] };
let observerFooter = new IntersectionObserver(onEntry, optionsFooter);
let elementsFooter = document.querySelectorAll('.hiden_subscription_card');
for (let elm of elementsFooter) {
   observerFooter.observe(elm);
}

