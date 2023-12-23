// Информация, на основе которой генерится сайт
let heroes = [
  ["Axe", "Tank"],
  ["Crystal Maiden", "Support"],
];
let heroesContainer = document.getElementById("heroesContainer");
let nameInput
let classInput

function displayHeroes() {
  heroesContainer.innerHTML = ""; // Очищаем текущее содержимое heroesContainer

  for (const [name, heroClass] of heroes) {
    // Используем цикл for-of для перебора героев
    
    let heroCard = document.createElement("div"); // Создаём элемент, в который будем добавлять информацию о герое

    heroCard.innerHTML = `<h3>${name}</h3><p>${heroClass}</p>`; // Записываем в созданный элемент разметку, подставляя необходимые данные

    heroesContainer.appendChild(heroCard); // Добавляем карточку героя в контейнер
  }
}

function addHero() {
  /* Ищем поля ввода */
  nameInput = document.getElementById("heroName");
  classInput = document.getElementById("heroClass");

  /* Кидаем новые данные из инпутов в массив с героями */
  const newHeroName = nameInput.value; // "Имя персонажа"
  const newHeroClass = classInput.value; // "Класс персонажа"

  // Проверяем, что введены данные перед добавлением в массив
  if (newHeroName && newHeroClass) {
    heroes.push([newHeroName, newHeroClass]);

    // Обновления списка героев на странице
    displayHeroes();

    // Очищаем поля ввода
    nameInput.value = "";
    classInput.value = "";
  } else {
    alert("Введите имя и класс героя!");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  displayHeroes();
  document.getElementById("addButton").addEventListener("click", addHero);
});
