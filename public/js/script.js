document.addEventListener("DOMContentLoaded", function() {
    let placeholder = document.getElementById("text");
    let words2 = ["Il n’y a pas de talent ici, ce n’est que du travail. C’est une obsession. Le talent n’existe pas.", "En tant qu’humains, nous sommes tous égaux. Vous pouvez devenir qui vous voulez si vous y consacrez du temps."," Vous atteindrez le sommet, c’est comme ça. Je ne suis pas talentueux.", "Je suis obsédé.", "Mcgregor", "Je m'entraîne, je mange, je dors, et je recommence.", "Khabib"];
    let index = 0;

    function type(words2) {
        let i = 0;
        let writing = setInterval(() => {
            placeholder.innerHTML += words2.charAt(i);
            i++;
            if(i >= words2.length) {
                clearInterval(writing);
                setTimeout(erase, 1000);
            }
        }, 75);
    }

    function erase() {
        let deleting = setInterval(() => {
            placeholder.innerHTML = placeholder.innerHTML.slice(0, -1);
            if(placeholder.innerHTML.length <= 0) {
                clearInterval(deleting);
                index++;
                if(index >= words2.length) {
                    index = 0;
                }
                type(words2[index]);
            }
        }, 10);
    }

    type(words2[index]);
    console.log('salut');

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



});
