let buttons = document.getElementsByClassName("drum");
console.log(buttons); 

let sound = new Audio;

for(let i = 0; i < buttons.length; i++){

    buttons[i].addEventListener("click", function(){

     let buttonInnerHtml = this.innerHTML;

      makeSound(buttonInnerHtml);
      buttonanimation(buttonInnerHtml);
      
    })
}



document.addEventListener("keydown", function(event){

     makeSound(event.key)
     /* When a key is pressed, the event object (which you called key) is passed — not the actual key string itself.
     You need to use key.key to access the pressed key value. */
     console.log(event);  //  .key === "w"  when 'w' is pressed!

     buttonanimation(event.key);
})

function makeSound(key){

  switch (key) {
        case "w":
          sound = new Audio("sounds/tom-1.mp3");
          sound.play();
          
          break;
          case "a":
            sound = new Audio("sounds/tom-2.mp3");
            sound.play();
          break;

          case "s": 
           sound = new Audio("sounds/tom-3.mp3");
           sound.play();
           break;

           case "d": 
           sound = new Audio("sounds/tom-4.mp3");
           sound.play();
           break;

           case "j":
            sound = new Audio("sounds/snare.mp3");
            sound.play();
           
            break;

            case "k":
              sound = new Audio("sounds/crash.mp3");
              sound.play();
              break;

              case "l" :
                sound = new Audio("sounds/kick-bass.mp3");
                sound.play();
                break;
        default: console.log(key);
          break;
      }


}


function buttonanimation(currentKey){



      let activeButton = document.querySelector("."+currentKey);

      activeButton.classList.add("pressed");

      setTimeout(function(){

        activeButton.classList.remove("pressed");
      },100)


}