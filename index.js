const list = document.querySelector('.list');
const btn = document.querySelector('.btn');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';

// Загрузка сохранённых задач при открытии страницы
function loadTasks() {
    // теперь каждая задача — объект { text, done }
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    list.innerHTML = '';

    if (tasks.length > 0) {
        tasks.forEach(task => {
            // поддержка старого формата (просто строка)
            if (typeof task === 'string') {
                createItem(task, false);
            } else {
                createItem(task.text, task.done);
            }
        });
    }

    applyFilter();
}

// Создаём элемент списка
function createItem(text, done = false) {
    const newItem = document.createElement('li');
    newItem.className = 'list__item' + (done ? ' done' : '');

    // чекбокс
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = done;

    checkbox.addEventListener('change', () => {
        newItem.classList.toggle('done', checkbox.checked);
        saveTasks();
        applyFilter();
    });

    // текстовый инпут
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Введите задачу';
    input.value = text;

    input.addEventListener('input', () => {
        saveTasks();
    });

    // кнопка удаления
    const crest = document.createElement('button');
    crest.className = 'close';

    newItem.appendChild(checkbox);
    newItem.appendChild(input);
    newItem.appendChild(crest);
    list.appendChild(newItem);
}

// Собираем данные из всех элементов и сохраняем в localStorage
function saveTasks() {
    const items = list.querySelectorAll('.list__item');
    const tasks = [];

    items.forEach(item => {
        const input = item.querySelector('input[type="text"]');
        const checkbox = item.querySelector('.checkbox');

        if (input.value.trim() !== '') {
            tasks.push({
                text: input.value,
                done: checkbox.checked
            });
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Применяем текущий фильтр: показываем / скрываем элементы
function applyFilter() {
    const items = list.querySelectorAll('.list__item');

    items.forEach(item => {
        const isDone = item.classList.contains('done');

        if (currentFilter === 'all') {
            item.style.display = '';          // показать
        } else if (currentFilter === 'done') {
            item.style.display = isDone ? '' : 'none';
        }
    });
}

// Переключение фильтра
filterBtns.forEach(filterBtn => {
    filterBtn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        filterBtn.classList.add('active');

        currentFilter = filterBtn.dataset.filter;
        applyFilter();
    });
});

// Добавить новый пустой input
btn.addEventListener('click', () => {
    // при добавлении переключаем фильтр на "Все", чтобы новый элемент был виден
    currentFilter = 'all';
    filterBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('[data-filter="all"]').classList.add('active');

    createItem('');
    applyFilter();
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