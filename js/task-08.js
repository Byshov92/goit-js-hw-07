'use strict';

// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и 
// нажимает кнопку Создать, после чего рендерится коллекция. 
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 
// 1 параметр amount - число. Функция создает столько div, 
// сколько указано в amount и добавляет их в div#boxes.
const refs = {
    renderBtn: document.querySelector('#controls [data-action="render"]'),
    destroyBtn: document.querySelector('#controls [data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
};

refs.renderBtn.addEventListener('click', onRenderBtnClick);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function onRenderBtnClick() {
    const amount = document.querySelector('#controls [type="number"]').value;
    createBoxes(amount);
}

function createBoxes(amount) {
    const basicSize = refs.boxes.firstElementChild
        ? Number.parseInt(refs.boxes.lastElementChild.style.width) + 10
        : 30;

    const boxRefs = [];

    for (var i = 0; i < amount; i += 1) {
        const size = basicSize + i * 10;

        const divRef = document.createElement('div');
        divRef.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${getRandomNumber()} , ${getRandomNumber()} , ${getRandomNumber()} )`;

        boxRefs.push(divRef);
    }

    refs.boxes.append(...boxRefs);
}

function destroyBoxes() {
    refs.boxes.innerHTML = '';
}

function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}