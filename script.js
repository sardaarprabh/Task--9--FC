// Hmaburger Menu

let hamburgerMenu=document.querySelector(".hamburger-menu");
let navContainer=document.querySelector(".navigation-container");
let main=document.querySelector(".main");
let banner=document.querySelector(".banner");
let footer=document.querySelector(".footer");


// console.log(navContainer.style);

hamburgerMenu.addEventListener("click",()=>{
  navContainer.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
  main.classList.toggle("display-none");
  banner.classList.toggle("display-none");
  footer.classList.toggle("display-none");
})


// Dropdown inside menu 

let arrowHead1=document.querySelector(".arrow1");
let arrowHead2=document.querySelector(".arrow2");

let dropDown1=document.querySelector(".dd1");
let dropDown2=document.querySelector(".dd2");

function dda1(){
  dropDown1.classList.toggle("display-none");
}
function dda2(){
  dropDown2.classList.toggle("display-none");
};




// Monthly plan
let monthlyPlan=document.querySelector(".plan-monthly");
let yearlyPlan=document.querySelector(".plan-yearly");

let planDuration=document.querySelectorAll(".pt-duration");

let starterPrice=document.querySelector(".p1");
let professionalPrice=document.querySelector(".p2");
let businessPrice=document.querySelector(".p3");


monthlyPlan.addEventListener("click",e=>{
  if(!monthlyPlan.classList.contains("selected-plan")){
  for(let i=0;i<planDuration.length;i++){
    planDuration[i].innerText="Per Month";
  }
  starterPrice.innerText="$10";
  professionalPrice.innerText="$29";
  businessPrice.innerText="$49";
  monthlyPlan.classList.add("selected-plan")
  yearlyPlan.classList.remove("selected-plan");

}
})

yearlyPlan.addEventListener("click",e=>{
  if(!yearlyPlan.classList.contains("selected-plan")){
for(let i=0;i<planDuration.length;i++){
  planDuration[i].innerText="Per Year";
}
  starterPrice.innerText="$100";
  professionalPrice.innerText="$290";
  businessPrice.innerText="$490";
  yearlyPlan.classList.add("selected-plan");
  monthlyPlan.classList.remove("selected-plan")

  }
})


// Slider JS

var swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 30,
  // loop:true,
  grabCursor: true,
  slideToClickedSlide:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});







