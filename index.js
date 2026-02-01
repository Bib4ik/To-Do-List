const list = document.querySelector('.list');
const btn = document.querySelector('.btn');

// Загрузка сохранённых задач при открытии страницы
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Очищаем список, кроме первой пустой строки
    list.innerHTML = '';

    // Если есть сохранённые задачи — создаём элементы
    if (tasks.length > 0) {
        tasks.forEach(text => {
            createItem(text);
        });
    }

}

// Создаём элемент списка
function createItem(text) {
    const newItem = document.createElement('li');
    newItem.className = 'list__item';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Введите задачу';
    input.value = text;

    // Сохраняем при каждом изменении текста в инпуте
    input.addEventListener('input', () => {
        saveTasks();
    });

    const crest = document.createElement('button');
    crest.className = 'close';

    newItem.appendChild(input);
    newItem.appendChild(crest);
    list.appendChild(newItem);
}

// Собираем текст из всех инпутов и сохраняем в localStorage
function saveTasks() {
    const inputs = list.querySelectorAll('input');
    const tasks = [];

    inputs.forEach(input => {
        if (input.value.trim() !== '') {
            tasks.push(input.value);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Добавить новый пустой input
btn.addEventListener('click', () => {
    createItem('');
});

// Удаление элемента и сохранение после удаления
list.addEventListener('click', (e) => {
    if (e.target.classList.contains('close')) {
        e.target.closest('.list__item').remove();
        saveTasks();
    }
});

// Загружаем задачи при старте
loadTasks();