const displayUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        if (response.ok) {
            const usersObj = await response.json()

            const table = document.querySelector("tbody")
            usersObj.forEach(user => {
                const tRow = document.createElement("tr")
                tRow.innerHTML =
                    `
                    <th scope="row">${user.id}</th>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    `

                table.appendChild(tRow)
                console.log(user)
            })

        }
    }
    catch (err) {
        console.error(err)
    }
}

const isLoading = (loading) => {
    const spinner = document.querySelector("#spinner-border")

    if (loading) {
        spinner.classList.remove("d-none")
    } else {
        spinner.classList.add("d-none")
    }
}

const searchFeature = (event) => {

    isLoading(true)

    const searchQuery = event.target.value
    console.log(searchQuery)

    const dropdown = document.querySelector("#dropdown")
    console.log(dropdown.value)

    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(usersObj => {
            console.log(usersObj)
            const resultsArea = document.querySelector("tbody")
            resultsArea.innerHTML = ""
            if (dropdown.value === "name") {
                const filteredResult = usersObj.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()))
                console.log(filteredResult)
                filteredResult.forEach(user => {
                    const tRow = document.createElement("tr")
                    tRow.innerHTML =
                        `
                        <th scope="row">${user.id}</th>
                        <td>${user.name}</td>
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                        `
                    resultsArea.appendChild(tRow)
                })
            }

            else if (dropdown.value === "username") {
                const filteredResult = usersObj.filter((user) => user.username.toLowerCase().includes(searchQuery.toLowerCase()))
                console.log(filteredResult)
                filteredResult.forEach(user => {
                    const tRow = document.createElement("tr")
                    tRow.innerHTML =
                        `
                            <th scope="row">${user.id}</th>
                            <td>${user.name}</td>
                            <td>${user.username}</td>
                            <td>${user.email}</td>
                            `
                    resultsArea.appendChild(tRow)
                })
            }

            else if (dropdown.value === "email") {
                const filteredResult = usersObj.filter((user) => user.email.toLowerCase().includes(searchQuery.toLowerCase()))
                console.log(filteredResult)
                filteredResult.forEach(user => {
                    const tRow = document.createElement("tr")
                    tRow.innerHTML =
                        `
                        <th scope="row">${user.id}</th>
                        <td>${user.name}</td>
                        <td>${user.username}</td>
                        <td>${user.email}</td>
                        `
                    resultsArea.appendChild(tRow)
                })
            }

        })

        .catch(err => {
            console.error(err);
        })
        .finally(() => {
            isLoading(false)
        })
}

const showListNames = () => {
    const listArea = document.querySelector(".list-names")
    const list = document.createElement("ul")
    if (listArea.innerHTML === "") {
        return fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(usersObj => {
                usersObj.forEach(user => {
                    list.innerHTML += `<li>${user.name}</li>`
                    listArea.appendChild(list)
                })

            })
            .catch(err => {
                console.error(err);
            })
    } else {listArea.innerHTML = ""}
}

const showAddresses = () => {
    
}

/* const fetchForAll = () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
}

const showListNames = (event) => {
    localStorage.setItems("query", event.target.value)
}
window.addEventListener("DOMContentLoaded", () => {

  const btn = document.querySelector("#btn-show")
  btn.addEventListener("change", showListNames)
  const storeNames = localStorage.getItem("query")
  const resultsArea = document.querySelector("table")
  resultsArea.innerHTML = ""
  const list = document.createElement("ul")
  showListNames()
  list.innerHTML = `<li>${user.name}</li>`
  resultsArea.appendChild(list)
}) */

window.onload = () => {
    displayUsers();
}