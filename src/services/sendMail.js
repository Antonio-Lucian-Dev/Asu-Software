export function sendMail(data) {

    const URL = "https://blueberry-crumble-16635.herokuapp.com";

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    fetch(`${URL}/api/v1/send-mail`, requestOptions)
        .then(res => {
            return res.json();
        });
};