"use strict";

const apiKey = "live_dbrsfQmDrCUZfPEHMIwVdaw7M7SXMGxhdCIOd08KTtUw4pY7XdplYREz4A6dGCo7";

// Функция для получения данных о котах из API
async function fetchCatData() {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=${apiKey}`);
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error("Error fetching cat data:", error);
  }
}

// Функция для обновления содержимого страницы с данными о котах
async function updateCatContent() {
  const catInfoElement = document.querySelector(".cat-info");
  const catImageElement = catInfoElement.querySelector("img");
  const catTitleElement = catInfoElement.querySelector("h2");
  const catDescriptionElement = catInfoElement.querySelector("p");

  catTitleElement.textContent = "Cute cat";
  catDescriptionElement.textContent = "Loading...";

  const catData = await fetchCatData();
  if (catData) {
    catImageElement.src = catData.url;
    catTitleElement.textContent = "Cute cat";
    catDescriptionElement.textContent = "Here's a cute cat for you!";
  }
}

// Обновляем содержимое страницы при загрузке
window.addEventListener("load", updateCatContent);

// Обработка клика по кнопке для обновления данных о коте
const refreshButton = document.querySelector(".refresh-button");
refreshButton.addEventListener("click", updateCatContent);
