document.getElementById('name-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    
    if (name.toLowerCase() === 'calabreso') {
        document.getElementById('header-img').style.display = 'none';
        document.getElementById('name-form').style.display = 'none';
        document.getElementById('question-container').style.display = 'block';
    } else {
        alert('Você não é meu homem, vá embora por favor');
    }
});

function nextQuestion(questionNumber) {
    if (questionNumber === 1) {
        document.getElementById('question1').style.display = 'none';
        document.getElementById('question2').style.display = 'block';
    } else if (questionNumber === 2) {
        document.getElementById('question2').style.display = 'none';
        document.getElementById('question3').style.display = 'block';
    } else if (questionNumber === 3) {
        document.getElementById('question3').style.display = 'none';
        document.getElementById('success-message').style.display = 'block';
    }
}