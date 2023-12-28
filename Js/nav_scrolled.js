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
  

