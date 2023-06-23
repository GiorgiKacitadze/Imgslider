const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const backbtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');


let index = 0;

function showslide(index){


    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');

        
    }

     slides[index].classList.add('active');
}


backbtn.addEventListener('click', function(){

   index = (index -1 + slides.length) % slides.length

   showslide(index)

   console.log(index)

})

nextBtn.addEventListener('click', function(){
    index = (index + 1) % slides.length

    showslide(index)
    console.log(index)
})