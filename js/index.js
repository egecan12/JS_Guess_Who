//Egecan Kahyaoglu
// Get all pics via querySelectorAll()
// class names are increasing such as card1 card2 card3 so this is why use ^
const pics =[...document.querySelectorAll('[class^="card"]')]; 
console.log(pics);
function flip(){
    this.classList.add("flip");
}




// STEP 1 - Use a for loop to make each card flip upon click
/* for(i=0;i<pics.length;i++){

pics[i].addEventListener("click", flip);

} */

// STEP 2 - Comment out code above. Now use a do while loop to make each card flip upon click

/*     let i = 0

    do{
        pics[i].addEventListener("click", flip);
        i++
    }

    while(i<pics.length);

 */


// STEP 3 - Comment out code above. Now use a .forEach() loop to make each card flip upon click
/* pics.forEach(function(pic){
    pic.addEventListener("click",flip);
}) */

// STEP 4 - Comment out code above. Now use a for OF loop to make each card flip upon click
/* for(let card of pics){
    card.addEventListener("click",flip);
}



 */

// STEP 5 - Comment out code above. Now use .map() loop to make each card flip upon click
pics.map(function(pic){
    pic.addEventListener("click",flip);

})