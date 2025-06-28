let inter;
let changmenuint;

document.addEventListener('DOMContentLoaded', function(){
    const backgrounds = document.querySelectorAll('.hero-background')

    let index = 0;

    function changeBackground(){
        backgrounds[index].classList.remove('active');

        index = (index + 1) % backgrounds.length

        backgrounds[index].classList.add('active');
    }

    inter = setInterval(changeBackground, 8000)


    const display = document.querySelectorAll('.menu-show-listing');

    let indexm = 0;

    function changingDisplay(){
        display[indexm].classList.remove('active');

        indexm = (indexm + 1) % display.length

        display[indexm].classList.add('active')
    }
    changmenuint = setInterval(changingDisplay, 8000)
})

const backgroundMaintain = document.querySelector('.hero');

backgroundMaintain.addEventListener('mouseenter', function () {
    clearInterval(inter)
})

backgroundMaintain.addEventListener('mouseleave', function () {
    const backgrounds = document.querySelectorAll('.hero-background')

    let index = 0;

    function changeBackground(){
        backgrounds[index].classList.remove('active');

        index = (index + 1) % backgrounds.length

        backgrounds[index].classList.add('active');


    }
    inter = setInterval(changeBackground, 8000)
})



/* ------------------------------------- THIS IS THE FAQ SECTION -------------------------------*/

let faq = document.querySelectorAll('.faq-list-number')
let faqbom = document.querySelectorAll('.faq-buttom')

faq.forEach(
    question => {

   

        question.addEventListener('click', function(){


            faqbom.forEach(
                answer => {
                    answer.style.display = 'none'
                    answer.classList.remove('active')
                }
            )
            
            this.querySelector('.faq-buttom').classList.add('active')
            this.querySelector('.faq-buttom').style.display = 'flex'


            this.addEventListener('mouseleave', function(){
                faqbom.forEach(
                    answer => {
                        answer.style.display = 'none'
                        answer.classList.remove('active')

                    }
                )
    
            })
    
        })



    }
)

/* ------------------------------------- THIS IS THE ICON-LISTING SECTION -------------------------------*/

let iconone = document.querySelector('.fa-hamburger')

iconone.addEventListener('click', function(){
    const display = document.querySelectorAll('.menu-show-listing');

    display.forEach(
        displaying => {
            displaying.classList.remove('active')
            display[0].classList.add('active')
        }
    )
})


let icontwo = document.querySelector('.fa-pizza-slice')

icontwo.addEventListener('click', function(){
    const display = document.querySelectorAll('.menu-show-listing');

    display.forEach(
        displaying => {
            displaying.classList.remove('active')
            display[2].classList.add('active')
        }
    )
})


let iconthree = document.querySelector('.fa-leaf')

iconthree.addEventListener('click', function(){
    const display = document.querySelectorAll('.menu-show-listing');

    display.forEach(
        displaying => {
            displaying.classList.remove('active')
            display[4].classList.add('active')
        }
    )
})


let iconfour = document.querySelector('.fa-cocktail')

iconfour.addEventListener('click', function(){
    const display = document.querySelectorAll('.menu-show-listing');

    display.forEach(
        displaying => {
            displaying.classList.remove('active')
            display[1].classList.add('active')
        }
    )
})


let iconfive = document.querySelector('.fa-ice-cream')

iconfive.addEventListener('click', function(){
    const display = document.querySelectorAll('.menu-show-listing');

    display.forEach(
        displaying => {
            displaying.classList.remove('active')
            display[3].classList.add('active')
        }
    )
})


$(document).ready(function() {
    $('.menu-bar').click(function(){
        $(this).find('i').toggleClass('fa-times fa-bars');
        if ($(this).find('i').hasClass('fa-times')) {
            $('.header-buttom').css({
                display : 'flex'
            })
        } else{
                $('.header-buttom').css({
                    display: 'none'
                });
        }
    })
    
    $('.header-buttom-link').click(function(){
        $('.header-buttom').css({
                    display: 'none'
                });
                $('.menu-bar').find('i').toggleClass('fa-times fa-bars');

    })
    

}); 


