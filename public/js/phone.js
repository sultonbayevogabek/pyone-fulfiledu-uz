"use strict"

document.addEventListener("DOMContentLoaded", function () {
  const phone = document.getElementById("phone");
  const allowedKeys = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'Backspace',
    'ArrowLeft',
    'ArrowUp',
    'ArrowDown',
    'ArrowRight',
    'Enter'
  ]

  phone.addEventListener("keydown", e => {
    if (!allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
  })

  phone.addEventListener("input", e => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    let parts = [value.slice(0, 2), value.slice(2, 5), value.slice(5, 7), value.slice(7, 9)];

    let result = parts[0];

    for (let i = 1; i < parts.length; i++) {
      if (parts[i]) {
        result += `-${parts[i]}`;
      }
    }

    e.target.value = result;
  })
})
