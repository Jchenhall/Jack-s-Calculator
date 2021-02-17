My NeoMorphic Calculator:                       WebDemo link: https://jchenhall.github.io/Jack-s-Calculator/

This calculator uses HTML, CSS and Javascript to function.

all styling (.scss/.css files, images) and javascript files related to the calculators construction are located in the 'assets' folder.

HTML:
    Basic calculator layout securing the body in a div called 'calKeys'. 
    My design included two display lines which are located above the calc keys in their own div 'output'.
    
CSS:
    One of the USP's of this calculator demo is the nightmode button which changes certain styles of the calculator and the webpage background. This illistrates my understanding of classes within CSS and the toggle function in javascript.

    I used @mixin and @incude functions to quickly impliment box shaders to the divs containing the inputs and the display to give the calculator a 3D feel. the shading colour was swapped out when hovered on and clicked to give visible ques for user interaction.

Javascript (in-depth notes on methods can be found in scripts.js):

The 3D movement was implimented using a free JS plugin (found here: ).
It was purely a style choice as it only added the 3D movement on hover and didnt assist in the running of the calculations.

