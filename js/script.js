'use strict';
// Просимо клієнта підтвердити бронювання готелю
// і зберігаємо результат роботи confirm у змінну
const isComing = confirm('Please confirm hotel reservation');
console.log(isComing);

// Запитуємо назву готеля, в якому хотів би зупинитися клієнт
// і зберігаємо результат виклику prompt у змінну.
const hotelName = prompt('Please enter desired hotel name');
console.log(hotelName);

const guestName = "Манго";
const roomNumber = 207;
const greeting =
  "Welcome " + guestName + ", your room number is " + roomNumber + "!";
console.log(greeting);
