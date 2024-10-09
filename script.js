const triggerRejection = document.getElementById("triggerRejection");
const triggerPromise = document.getElementById("triggerPromise");
const message = document.getElementById("message");

triggerPromise.addEventListener("click", () => {
  const rejectedMessage = "The Promise has been rejected!";
  const resolvedMessage = "The Promise has been resolved!";
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (triggerRejection.checked) {
        reject();
      } else {
        resolve();
      }
    }, 1000);
  })
    .then(() => {
      message.innerHTML = resolvedMessage;
      message.classList.remove("rejected");
      message.classList.add("resolved");
    })
    .catch(() => {
      message.innerHTML = rejectedMessage;
      message.classList.remove("resolved");
      message.classList.add("rejected");
    });
});
