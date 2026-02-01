[1mdiff --git a/index.js b/index.js[m
[1mindex 81fe0ef..5e33d28 100644[m
[1m--- a/index.js[m
[1m+++ b/index.js[m
[36m@@ -1,71 +1,30 @@[m
 const list = document.querySelector('.list');[m
 const btn = document.querySelector('.btn');[m
[32m+[m[32mconst li=document.querySelector('.list__item');[m
 [m
[31m-// Загрузка сохранённых задач при открытии страницы[m
[31m-function loadTasks() {[m
[31m-    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];[m
[31m-[m
[31m-    // Очищаем список, кроме первой пустой строки[m
[31m-    list.innerHTML = '';[m
[31m-[m
[31m-    // Если есть сохранённые задачи — создаём элементы[m
[31m-    if (tasks.length > 0) {[m
[31m-        tasks.forEach(text => {[m
[31m-            createItem(text);[m
[31m-        });[m
[31m-    }[m
[31m-[m
[31m-}[m
[32m+[m[32mbtn.addEventListener('click', () => {[m
 [m
[31m-// Создаём элемент списка[m
[31m-function createItem(text) {[m
     const newItem = document.createElement('li');[m
     newItem.className = 'list__item';[m
 [m
     const input = document.createElement('input');[m
     input.type = 'text';[m
     input.placeholder = 'Введите задачу';[m
[31m-    input.value = text;[m
[31m-[m
[31m-    // Сохраняем при каждом изменении текста в инпуте[m
[31m-    input.addEventListener('input', () => {[m
[31m-        saveTasks();[m
[31m-    });[m
 [m
[31m-    const crest = document.createElement('button');[m
[32m+[m[32m    const crest  = document.createElement('img');[m
     crest.className = 'close';[m
[32m+[m[32m    crest.src = '/close-btn.png';[m
 [m
     newItem.appendChild(input);[m
     newItem.appendChild(crest);[m
     list.appendChild(newItem);[m
[31m-}[m
[31m-[m
[31m-// Собираем текст из всех инпутов и сохраняем в localStorage[m
[31m-function saveTasks() {[m
[31m-    const inputs = list.querySelectorAll('input');[m
[31m-    const tasks = [];[m
[31m-[m
[31m-    inputs.forEach(input => {[m
[31m-        if (input.value.trim() !== '') {[m
[31m-            tasks.push(input.value);[m
[31m-        }[m
[31m-    });[m
[31m-[m
[31m-    localStorage.setItem('tasks', JSON.stringify(tasks));[m
[31m-}[m
[31m-[m
[31m-// Добавить новый пустой input[m
[31m-btn.addEventListener('click', () => {[m
[31m-    createItem('');[m
 });[m
 [m
[31m-// Удаление элемента и сохранение после удаления[m
 list.addEventListener('click', (e) => {[m
     if (e.target.classList.contains('close')) {[m
         e.target.closest('.list__item').remove();[m
[31m-        saveTasks();[m
     }[m
 });[m
 [m
[31m-// Загружаем задачи при старте[m
[31m-loadTasks();[m
\ No newline at end of file[m
[41m+[m
[41m+[m
