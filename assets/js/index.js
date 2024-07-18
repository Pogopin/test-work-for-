const desktopNode = document.querySelector('.desktop');
const mobileNode = document.querySelector('.mobile');
const sessionTableNode = document.querySelector('.session__table');
const sessionListNode = document.querySelector('.session__list-mobile');
const slideIndex = document.querySelector('.slide-index');

window.addEventListener("resize",()=>{
    let isMobile = window.matchMedia("(max-width: 375px)").matches;   
    let resolution = window.matchMedia("(max-width: 565px)").matches;

    if(isMobile) {
        desktopNode.classList.add('hidden');
        mobileNode.classList.remove('hidden');
        
    } else {
        desktopNode.classList.remove('hidden');
        mobileNode.classList.add('hidden');
    }
    if(resolution) {
        sessionTableNode.classList.add('hidden');
        sessionListNode.classList.remove('hidden');
    } else {
        sessionTableNode.classList.remove('hidden');
        sessionListNode.classList.add('hidden');
    }    
});

// slider
const participantsSlider = new Swiper('.participants-slider', {
    spaceBetween: 10,
    slidesPerView: 3,
    initialSlide: 0,
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },   
    // Navigation arrows
    navigation: {
      nextEl: '.participants-slider-next',
      prevEl: '.participants-slider-prev',
    },
    breakpoints: {
        // when window width is >= 1020px
        325: {
          slidesPerView: 1,
        },
        375: {
          slidesPerView: 1,
        },
        720: {
          slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
      }  
  });
  participantsSlider.on('slideChange', function () {
    currentSlideIndexView();
  });
  document.querySelector('.swiper-button-prev').addEventListener('click', (e) => {
    currentSlideIndexView();
  })
  document.querySelector('.swiper-button-next').addEventListener('click', (e) => {
    currentSlideIndexView();
  })
 
  const currentSlideIndexView = () => {
    slideIndex.textContent = participantsSlider.realIndex;
  }