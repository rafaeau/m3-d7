window.onload = () => {
    let params = new URLSearchParams(document.location.search);
    let id = params.get("id");
    detailsBtn(id);
  }

const detailsBtn = (id) => {
    const detailsArea = document.querySelector(".row")
    const list = document.createElement("div")
    return fetch("https://jsonplaceholder.typicode.com/users/" + id)
        .then(response => response.json())
        .then(user => {
            list.innerHTML = `
                <div class="jumbotron">
                    <h6>ID: ${user.id}</h6>
                    <h6>Name: ${user.name}</h6>
                    <h6>Username: ${user.username}</h6>
                    <h6>Email: ${user.email}</h6>
                    <h6>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</h6>
                    <h6>Phone: ${user.phone}</h6>
                    <h6>Website: ${user.website}</h6>
                    <hr class="my-4">
                    <h6>Company name: ${user.company.name}</h6>
                    <h6>Company catch phrase: ${user.company.catchPhrase}</h6>
                    <h6>Company key-words: ${user.company.bs}</h6>
                    <a class="btn btn-secondary btn-sm mt-5" href="./index.html" role="button">Back to home</a>
                </div>
                `
            detailsArea.appendChild(list)
        })
        .catch(err => {
            console.error(err);
        })
}