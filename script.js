document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('header nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    const typingElement = document.getElementById('typing');
    const words = ["Web Developer", "Problem Solver", "App Developer", "Youtuber"];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = words[wordIndex];
    let isDeleting = false;

    function type() {
        let displayText = currentWord.substring(0, letterIndex);
        typingElement.innerHTML = displayText;

        if (!isDeleting && letterIndex < currentWord.length) {
            letterIndex++;
        } else if (isDeleting && letterIndex > 0) {
            letterIndex--;
        }

        if (letterIndex === currentWord.length && !isDeleting) {
            isDeleting = true;
            setTimeout(type, 2000);
            return;
        }

        if (letterIndex === 0 && isDeleting) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            currentWord = words[wordIndex];
        }

        setTimeout(type, isDeleting ? 100 : 200);
    }

    type();
});
