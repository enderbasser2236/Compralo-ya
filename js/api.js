const HTMLresponse = document.getElementById('api');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => {
    for (user of users) {
      /* console.log(user) */
      HTMLresponse.innerHTML += `<div class="bg-success text-wrap text-center users"><strong>Sr.(a)  ${user.name},  Email:  ${user.email} Website: ${user.website}</strong></div>`;
    }
  });
