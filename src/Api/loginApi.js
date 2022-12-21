
async function get(url, params = {}) {
    const options = {};
    const response = await fetch(url, params);
    console.log(response);
    return response.json();
}

function post(url, data) {
    // const raw = JSON.stringify(data);
    console.log(data);
    const raw = JSON.stringify({
        "username": "eric@erb-tech.com",
        "password": "Password1"
    });
    const options = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*/*',
        'Accept': '*'
            // 'Content-Type': 'application/x-www-form-urlencoded',
    },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer',
        body: {raw}
    };
    const response = fetch(url, options)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(response => {
            console.log(response);
            return response;
        })
     .catch(err => {
         console.log(err);
     });
    
    return response;
}

export {get, post};