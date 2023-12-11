// 1) create in js

const buttonElement = document.createElement("button")
buttonElement.setAttribute("id", "button")
buttonElement.style.padding = "15px, 20px";
buttonElement.textContent = "click"

const divElement = document.createElement("div")
divElement.setAttribute("id", "div")

const textElement = document.createElement("p")
textElement.setAttribute("id", "text")
textElement.textContent = "click if you want div to disappear"

document.body.append(buttonElement, divElement)
divElement.appendChild(textElement)

buttonElement.addEventListener("click", () => {
    divElement.style.display = "none";
})



// 2) create in JS

const div2Element = document.createElement("div")
div2Element.setAttribute("id", "card")

const title = document.createElement("h2")
title.textContent = "Gandalf"

const hyperLink = document.createElement("a")
hyperLink.textContent = "Go to profile"
hyperLink.href = "#"

document.body.appendChild(div2Element)
div2Element.append(title, hyperLink)


// 3) making quiz

const questions = document.querySelectorAll('.question');
const pointsDisplay = document.getElementById('points');
let points = 0;

questions.forEach((question) => {
    const answers = question.querySelectorAll('button');
    answers.forEach((answer) => {
        answer.addEventListener('click', () => {
            if (answer.classList.contains('correct')) {
                answer.style.backgroundColor = 'green'; 
                points += 1; 
            } else {
                answer.style.backgroundColor = 'red';
            }
            pointsDisplay.textContent = points; 
        });
    });
});
