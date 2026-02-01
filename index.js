const list = document.querySelector('.list');
const btn = document.querySelector('.btn');
const li=document.querySelector('.list__item');

btn.addEventListener('click', () => {

    const newItem = document.createElement('li');
    newItem.className = 'list__item';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Введите задачу';

    const crest  = document.createElement('img');
    crest.className = 'close';
    crest.src = '/close-btn.png';

    newItem.appendChild(input);
    newItem.appendChild(crest);
    list.appendChild(newItem);
});


