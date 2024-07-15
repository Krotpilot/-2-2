const button = document.querySelector('button');

button.addEventListener('mouseover', function() {
    button.style.transition = 'background-color 0.3s ease';
    button.style.backgroundColor = 'blue';
});

button.addEventListener('mouseout', function() {
    button.style.transition = 'background-color 0.3s ease';
    button.style.backgroundColor = '#3F8E00';
});

button.addEventListener('click', function() {
    if (confirm('Вы уверены?')) {
        // Выполнение действия
    }
});