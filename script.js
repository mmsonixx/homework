function checkAnswers() {
    let score = 0;
    let totalQuestions = 2;
    
    let answers = {
        q1: "a",
        q2: "b"
    };
    
    for (let key in answers) {
        let selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === answers[key]) {
            score++;
        }
    }
    
    document.getElementById("result").innerText = `Ваш результат: ${score} з ${totalQuestions}`;
}
