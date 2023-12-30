window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 0) { /* Check if you've scrolled down */
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


/*

window.addEventListener('scroll', function() {...}):

    This line of JavaScript is adding an event listener to the window object. An event listener is a function that waits for an event to occur, in this case, the scroll event. This means that the function provided inside the parentheses will be executed whenever the user scrolls.
    


    
var navbar = document.querySelector('.navbar');:

    This line is declaring a variable named navbar and assigning it to the element with the class name 'navbar' on your webpage. document.querySelector('.navbar') returns the first element in the document that matches the specified selector, in this case, '.navbar'.
    
    


if (window.pageYOffset > 0) {...}:

    This is an if statement that checks if the page has been scrolled down. window.pageYOffset is a built-in property that returns the number of pixels that the document has been scrolled vertically. If the number of pixels is greater than 0, it means the user has scrolled down the page.
    


navbar.classList.add('scrolled');:

    If the page has been scrolled down, this line adds the class 'scrolled' to the navbar element. When the 'scrolled' class is added, it changes the style of the navbar according to the CSS rules you set for the 'scrolled' class (like changing the background color).
    

else {navbar.classList.remove('scrolled');}:

    If the page has not been scrolled down (i.e., if window.pageYOffset is not greater than 0), then the 'scrolled' class is removed from the navbar element. This means that when the user scrolls back up to the top of the page, the navbar will revert back to its original style as defined in the CSS rules for the 'navbar' class.
    
*/




//carousel code start

const myCarouselElement = document.querySelector('#carouselExampleControls');
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 4000,
  wrap: true
})



document.addEventListener("DOMContentLoaded", function() {
  const reviewCarouselElement = document.querySelector('#carouselExampleIndicators2');
  const reviewcarousel = new bootstrap.Carousel(reviewCarouselElement, {
    interval: 2000,
    wrap: true
  });
});





// form valid massage start
const form=document.getElementById('forms')
const name=document.getElementById('name')
const email=document.getElementById('email')
const date=document.getElementById('date')
const time=document.getElementById('time')
const select=document.getElementById('select')


form.addEventListener('submit', (e)  =>{
    e.preventDefault();
    chequeInputs();
});



function chequeInputs(){
    //get values from the inputs & select

    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const dateValue = date.value.trim();
    const timeValue = time.value.trim();
    const selectValue = select.value.trim();


    if(nameValue=== ''){
        //add error class and show error
        setErrorFor(name, 'Name cannot not be empty');
    }else{
        //add success class
        setSuccessFor(name);
    }

    if(emailValue=== ''){
        setErrorFor(email, 'Email cannot not be empty');
    }else{
        setSuccessFor(email);
    }

    if(dateValue=== ''){
        setError2For(date, 'Please choose the date');
    }else{
        setSuccess2For(date);
    }

    if(timeValue=== ''){
        setError2For(time, 'Please choose the time');
    }else{
        setSuccess2For(time);
    }

    if(selectValue=== '0'){
        setError2For(select, 'Please choose guest');
    }else{
        setSuccess2For(select);
    }
}

function setErrorFor(input, massage){
    const formControl = input.parentElement; // class .form-control
    const small = formControl.querySelector('small'); // add small tag

    small.innerText = massage;

    formControl.className ='col-lg-6 col-sm-12 form-floating form-label  position-relative error';
}

function setSuccessFor(input){
    const formControl = input.parentElement; // class .form-control
    formControl.className ='col-lg-6 col-sm-12 form-floating position-relative success';

}

function setError2For(input, massage){
    const formControl = input.parentElement; // class .form-control
    const small = formControl.querySelector('small'); // add small tag

    small.innerText = massage;

    formControl.className ='col-lg-4 col-sm-6 position-relative form-label error';
}

function setSuccess2For(input){
    const formControl = input.parentElement; // class .form-control
    formControl.className ='col-lg-4 col-sm-6 position-relative form-label success';

}
  

