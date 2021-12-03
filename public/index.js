const registerButton = document.querySelector("#work")
registerButton.addEventListener("click", () => {
console.log('hit')
  axios.get("http://localhost:4000/api/work")
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error)
    });
})