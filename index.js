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

const searchFeature = (event) => {
    const searchQuery = event.target.value
    console.log(searchQuery)

    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(usersObj => {
      console.log(usersObj)
      const resultsArea = document.querySelector("tbody")
      resultsArea.innerHTML = ""
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

    })

    .catch(err => console.log(err))
  }

window.onload = () => {
    displayUsers();
}