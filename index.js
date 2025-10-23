const argumentos = process.argv.slice(2)

const fetchData = async (method, endpoint, options = null) => {
    let response = null

    if (method == "GET") {
        response = await fetch(`https://fakestoreapi.com/${endpoint}`)
    } else {
        response = await fetch(`https://fakestoreapi.com/${endpoint}`, options)
    }

    return await response.json()
}

const showMessage = (method, endpoint, response) => console.log(`Response ${method} ${endpoint}`, response)

const sendRequest = async (method, endpoint, dataBody) => {
    let response = null

    if (dataBody?.length > 0) {

        const options = {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: dataBody[0],
                price: dataBody[1],
                category: dataBody[2],
            })
        }

        response = await fetchData(method, endpoint, options)
        showMessage(method, endpoint, response)
    } else {
        let options = null

        if (method == "DELETE") {
            options = { method: method }
        }

        response = await fetchData(method, endpoint, options)
        showMessage(method, endpoint, response)
    }
}

sendRequest(argumentos[0], argumentos[1], argumentos.slice(2))