// Happy coding!

// document.querySelector(".canvas").addEventListener("click", function(event){
//     console.log(event.target.id);
//     document.body.style.backgroundColor = event.target.id;
// }); // TERMINADO 

let div = document.querySelector(".canvas");
div.addEventListener("click", function(event){
    console.log(window.getComputedStyle(event.target).backgroundColor);
    
    document.body.style.backgroundColor = getComputedStyle(event.target).backgroundColor;
}); // BONUS