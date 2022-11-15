// 畫面
const menu = document.querySelector("#menu");
function toggleMenu(state){
  if(state){
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
}


// 水平滾動
(function(){
    init();

    var g_containerInViewport;
    function init(){
        setStickyContainersSize();
        bindEvents();
    }

    function bindEvents(){
        window.addEventListener("wheel", wheelHandler);        
    }

    function setStickyContainersSize(){
        document.querySelectorAll('.sticky-container').forEach(function(container){
            const stikyContainerHeight = container.querySelector('main').scrollWidth;
            const stikyContainerHeight2 = container.querySelector('section.v').scrollHeight;
          // console.log(stikyContainerHeight, stikyContainerHeight2)
            container.setAttribute('style', `height:${stikyContainerHeight}px`); //高度還要再試過
        });
    }

    function isElementInViewport (el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
    }

    function wheelHandler(evt){
        const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function(container){
            return isElementInViewport(container);
        })[0];

        if(!containerInViewPort){
            return;
        }

        var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
        var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
        let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

        if(g_canScrollHorizontally){
            containerInViewPort.querySelector('main').scrollLeft += evt.deltaY;
        }
    }
})();



//designs
const swiper = new Swiper('.design-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  grabCursor:true,
  speed:2000,
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  // },
  
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 48
    },
  },
});