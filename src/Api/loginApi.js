
async function get(url, params = {}) {
    const options = {};
    const response = await fetch(url, params);
    console.log(response);
    return response.json();
}

function post(url, data = {}) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "username": "eric@erb-tech.com",
        "password": "Password1"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:34349/login", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    // console.log(data);
    //
    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Accept', 'application/json');
    //
    // const options = {
    //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //     mode: 'cors', // no-cors, *cors, same-origin
    //     cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    //     credentials: 'include', // include, *same-origin, omit
    //     headers: headers,
    //     body: JSON.stringify({
    //         "data": {
    //             "username": "jhasjkasjk",
    //             "password": "password"
    //         }
    //     })
    // };
    // return await fetch(url, options)
    //     .then(response => {
    //         console.log(response);
    //         return response.json();
    //     })
    //     .then(response => {
    //         console.log(response);
    //         return response;
    //     })
    //  .catch(err => {
    //      console.log(err);
    //  });
}

export {get, post};