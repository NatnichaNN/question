function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
}
function checkAnswer2(answer2) {
    const result2 = document.getElementById('result2');
    if (answer2 === 'c') {
        result2.textContent = "ถูกต้อง";
        result2.style.color = 'green';
    } else {
        result2.textContent = "Incorrect! Try again.";
        result2.style.color = 'red';
    }
}
