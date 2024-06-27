window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 0) { /* Check if you've scrolled down */
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


  let backToTopButton = document.getElementById("back-to-top");


  window.addEventListener("scroll", function() {
    if (window.scrollY > 200) { // Adjust this value as needed
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  backToTopButton.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


const myCarouselElement = document.querySelector('#carouselExampleControls');
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 3000,
  wrap: true
})



document.addEventListener("DOMContentLoaded", function() {
  const reviewCarouselElement = document.querySelector('#carouselExampleIndicators2');
  const reviewcarousel = new bootstrap.Carousel(reviewCarouselElement, {
    interval: 3000,
    wrap: true
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


    if(nameValue === ''){
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

};

});






  





