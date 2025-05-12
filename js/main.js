const button = document.querySelector("button.kk1");
const hiddnenDiv = document.querySelector("div.invisible");

button.addEventListener("click", () => {
    hiddnenDiv.classList.toggle("invisible");
  
    });

// const button2 = document.querySelector("button.kk2");
// const hiddenDiv2 = document.querySelector("div.invisible2");
// button2.addEventListener("click", () => {
//     hiddenDiv2.classList.toggle("invisible2");
  
//     });
// const button3 = document.querySelector("button.kk3");
// const hiddenDiv3 = document.querySelector("div.invisible3");
// button3.addEventListener("click", () => {
//     hiddenDiv3.classList.toggle("invisible3");
  
//     });
// const button2 = document.querySelector("button.kk2");
// const hiddenDiv2 = document.querySelector("div.invisible2");
// button2.addEventListener("click", () => {
//     // Thay vì toggle class 'invisible2', hãy toggle class 'hidden'
    
//     hiddenDiv2.classList.toggle("hidden");
// });

// const button3 = document.querySelector("button.kk3");
// const hiddenDiv3 = document.querySelector("div.invisible3");
// button3.addEventListener("click", () => {
//     hiddenDiv3.classList.toggle("hidden");
// });
const button1 = document.querySelector("button.kkk");
const hiddnenDiv1 = document.querySelector("div.invisible1");

button.addEventListener("click", () => {
    // Ẩn block hiện tại
    currentBlock2.classList.add("hidden");
    currentBlock3.classList.add("hidden");
    // Hiện block invisible2
    hiddnenDiv1.classList.remove("block");
    
    // // Cuộn đến vị trí của block mới (tuỳ chọn)
    // hiddenDiv2.scrollIntoView({ behavior: 'smooth' });
}
);


const button2 = document.querySelector("button.kk2");
const currentBlock = document.querySelector("div.invisible1"); // Block hiện tại
const currentBlock3 = document.querySelector("div.invisible3"); // Block hiện tại
const hiddenDiv2 = document.querySelector("div.invisible2"); // Block ẩn

button2.addEventListener("click", () => {
    // Ẩn block hiện tại
    currentBlock.classList.add("hidden");
    currentBlock3.classList.add("hidden");
    // Hiện block invisible2
    hiddenDiv2.classList.remove("hidden");
    
    // // Cuộn đến vị trí của block mới (tuỳ chọn)
    // hiddenDiv2.scrollIntoView({ behavior: 'smooth' });
});
const button3 = document.querySelector("button.kk3");
const currentBlock2 = document.querySelector("div.invisible2"); 
const currentBlockUndo = document.querySelector("div.invisible1") // Block hiện tại
const hiddenDiv3 = document.querySelector("div.invisible3"); // Block ẩn
button3.addEventListener("click", () => {
    // Ẩn block hiện tại
    currentBlock2.classList.add("hidden");
    currentBlockUndo.classList.add("hidden");

    // Hiện block invisible3
    hiddenDiv3.classList.remove("hidden");
    
    
    // // Cuộn đến vị trí của block mới (tuỳ chọn)
    // hiddenDiv3.scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
    const testimonialSwiper = new Swiper('.testimonial-01 .swiper', {
      // Optional parameters
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.testimonial-01 .swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        // Khi màn hình >= 768px
        768: {
          slidesPerView: 1,
        },
        // Khi màn hình >= 1200px
        1200: {
          slidesPerView: 2,
        }
      }
    });
  });