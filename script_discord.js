// Информация, на основе которой генерится сайт
let heroes = [
    ["Axe", "Tank"],
    ["Crystal Maiden", "Support"],
  ];
  let heroNames = [];
  let heroClasses = [];
  let heroesContainer = document.getElementById("heroesContainer");
  let nameInput;
  let classInput;
  
  function displayHeroes() {
    // Очищаем текущее содержимое контейнера
    heroesContainer.innerHTML = "";
  
    // Используем цикл for-of для перебора героев
    for (const [name, heroClass] of heroes) {
      // Создаём элемент, в который будем добавлять информацию о герое
      let heroDiv = document.createElement("div");
  
      // Записываем в созданный элемент разметку, подставляя необходимые данные
      heroDiv.innerHTML = `<h3>${name}</h3><p>${heroClass}</p>`;
  
      // Добавляем карточку героя в контейнер
      heroesContainer.appendChild(heroDiv);
    }
  }
  
  function addHero() {
    /* Ищем поля ввода */
    nameInput = document.getElementById("heroName");
    classInput = document.getElementById("heroClass");
  
    /* Кидаем новые данные из инпутов в массив с героями */
    const newHeroName = nameInput.value;
    const newHeroClass = classInput.value;
  
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