const btn = document.getElementById("btn");
const title = document.getElementById("title");

// callback fn (settimeout)

// btn.addEventListener("click", () => {
//   setTimeout(() => {
//     title.style.backgroundColor = "red";
//     title.style.color = "white";
//     setTimeout(() => {
//       title.style.backgroundColor = "purple";
//       title.style.color = "yellow";
//       setTimeout(() => {
//         title.style.backgroundColor = "red";
//         title.style.color = "green";
//         setTimeout(() => {
//           title.style.backgroundColor = "orange";
//           title.style.color = "white";
//           setTimeout(() => {
//             title.style.backgroundColor = "cyan";
//             title.style.color = "blue";
//           }, 5000);
//         }, 5000);
//       }, 5000);
//     }, 5000);
//   }, 5000);
// });

// promises

function changeColor(color1, color2) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      title.style.backgroundColor = color1;
      title.style.color = color2;
      res();
    }, 5000);
  });
}

btn.addEventListener("click", () => {
  changeColor("red", "white")
    .then(() => {
      return changeColor("purple", "yellow");
    })
    .then(() => {
      return changeColor("red", "green");
    })
    .then(() => {
      return changeColor("orange", "white");
    })
    .then(() => {
      return changeColor("cyan", "blue");
    });
});
