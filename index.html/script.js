let section = document.querySelector("section");


for (let i = 99; i >= 0; i--) {
  if (i > 0) {
    section.insertAdjacentHTML("beforeend", `
      <p>${i} 🐸s on 🪵s, ${i} 🐸s!</p>
      <p>One frog jumps off the log,</p>
      <p>${i - 1} 🐸s on 🪵s now!</p>
      <br>
    `);
  } else {
    section.insertAdjacentHTML("beforeend", `
      <p>No more 🐸s on 🪵s, no more 🐸s!</p>
      <p>All the frogs have jumped away!</p>
    `);
  }
}