const HTMLresponse = document.getElementById('api');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => {
    for (user of users) {
      /* console.log(user) */
      HTMLresponse.innerHTML += `<div class="badge bg-success text-wrap text-center users" style="width: 20rem;">Sr.(a)  ${user.name},  Email:  ${user.email} Website: ${user.website}</div></br>`;
    }
  });
