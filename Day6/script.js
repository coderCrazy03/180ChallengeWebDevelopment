function show(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hide(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }

let currentIndex = 0;
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    if (index>=totalSlides)
    {
        currentIndex = 0;
    } 
    else if(index<0) {
        currentIndex=totalSlides-1;
    } 
    else
     {
        currentIndex=index;
    }

    const offset=-currentIndex*100;
    document.querySelector('.gallery-slider').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}
setInterval(nextSlide, 3000);