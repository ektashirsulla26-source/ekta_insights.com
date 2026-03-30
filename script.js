const text = ["Data Analyst", "Machine Learning Enthusiast", "Data Scientist"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    currentText = text[i];
    
    if (isDeleting) {
        document.querySelector(".typing").textContent = currentText.substring(0, j--);
    } else {
        document.querySelector(".typing").textContent = currentText.substring(0, j++);
    }

    if (!isDeleting && j === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();
