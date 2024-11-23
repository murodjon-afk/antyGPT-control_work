import { createTodosDay } from "./utils/today.js";

fetch('http://localhost:3001/todos')
.then((res) => res.json()) 
.then((data) => {
  data.forEach((item) => createTodosDay(item));
})
.catch((error) => console.error('Ошибка загрузки данных:', error));






