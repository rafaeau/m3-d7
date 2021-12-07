const displayUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        if (response.ok) {
            const usersObj = await response.json()

            const table = document.querySelector(".table")
            usersObj.forEach(user => {
                const tRow = document.createElement("tbody")
                tRow.innerHTML = 
                    `<tr>
                    <th scope="row">${user.id}</th>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    </tr>`

                table.appendChild(tRow)
                console.log(user)
        })

        }
    }
    catch (err) {
        console.error(err)
    }
}

window.onload = () => {
    displayUsers();
}