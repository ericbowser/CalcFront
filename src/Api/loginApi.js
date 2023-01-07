
async function get(url, params = {}) {
    const response = await fetch(url, params);
    console.log(response);
    return response.json();
}

async function post(url, data = {}) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(data);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    try {
        const response = await fetch(url, requestOptions);
        return response; 
    } catch(err) {
       console.log(err);
    }
}

export {get, post};