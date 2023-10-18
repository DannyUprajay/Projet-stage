//Define the placeholder where the text will be write in thanks to his id.
let placeholder = document.getElementById("text");
//Stock all of the sentences pieces in an array.
let words2 = ["Il n’y a pas de talent ici, ce n’est que du travail. C’est une obsession. Le talent n’existe pas.", "En tant qu’humains, nous sommes tous égaux. Vous pouvez devenir qui vous voulez si vous y consacrez du temps."," Vous atteindrez le sommet, c’est comme ça. Je ne suis pas talentueux.", "Je suis obsédé.", "Mcgregor", "Je m'entraîne, je mange, je dors, et je recommence.", "Khabib"];
//Initialize the index at the first element of the previously created array.
let index = 0;
function type(words2){
    let i = 0;
    //Set the interval that makes the writing animation.
    let writing = setInterval(()=>{
        //Add the letter at the i index of the current word in the placeholder.
        placeholder.innerHTML += words2.charAt(i);
        i ++;
        //If the i index reaches the end of the current word, the writing animation interval stops and the deleting animation beggins after a defined time.
        if(i>=words2.length){
            clearInterval(writing);
            setTimeout(erase, 1000);
        }
    }, 75)

}

function erase(){
    //Set the interval that makes the deleting animation.
    let deleting = setInterval(() => {
        //Pop off the last character of the previously written sentence.
        placeholder.innerHTML = placeholder.innerHTML.slice(0,-1);
        //If no one single letter remains, the deleting animation interval stops.
        if(placeholder.innerHTML.length <= 0){
            clearInterval(deleting);
            //The index var increases by 1, the writing animation is about to start with the next sentence.
            index++;
            //If the index var reaches the end of the sentences array, set his value at 0 to looping from the first sentence of the array.
            if(index>=words2.length){
                index = 0;
            }
            type(words2[index])
        }


    }, 10);

}

type(words2[index]);
console.log('salut')

let sections = document.querySelectorAll("section");


window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop + 56;
        let height = sec.offsetHeight;

        if (top >= offset - 500 && top < offset - 200 + height ) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });
});


// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) =>  {
//         if(entry.isIntersecting){
//             entry.target.classList.add("show-animate");
//
//         }else{
//             entry.target.classList.remove("show-animate");
//         }
//     })
// } )
// // let hiddenElement = document.querySelectorAll("hiden");
// sections.forEach((el) =>  observer.observe(el));
// // console.log("salut")