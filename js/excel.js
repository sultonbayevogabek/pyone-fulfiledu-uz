'use strict';

(async _ => {
  const statistics = new Statistics();
  let user = JSON.parse(localStorage.getItem('user'));

  document.querySelector('#joinToChannel')?.addEventListener('click', async (e) => {
    e.target.setAttribute('disabled', 'true');
    await statistics.onClickTgBtn();
    e.target.removeAttribute('disabled');
    window.location.href = 'https://t.me/+-anOngXRXHw5Y2M6';
  })

  if (user && user?.name && user?.phone && user?.time) {
    const formData = new FormData();

    formData.append('Ismi', user?.name);
    formData.append('Telefon raqami', user?.phone);
    formData.append(`Ro'yxatdan o'tgan vaqti`, user?.time);
    formData.append(`Foydalanuvchi ID`, statistics.userId);
    formData.append(`Timestamp`, statistics.time?.toString());

    let response = await fetch('https://script.google.com/macros/s/AKfycbwk32Db9qSl3KFD7ZMtKzGKx1ldrX-O1_hxupJJZ0N5Z6gSJxQYVu2sDhfUE9g7rEm6/exec', {
      method: 'POST',
      body: formData
    })
    await response.json();
    await statistics.onRegister(user);
    localStorage.removeItem('user');
  } else {
    localStorage.removeItem('user');
  }
})()

