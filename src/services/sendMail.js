import axios from "axios";

export const sendMail = (data) => {

    let responseFromServer = "";

    const URL = "https://blueberry-crumble-16635.herokuapp.com";

    axios.post(`${URL}/api/v1/send-mail`, { data })
        .then(res => {
            responseFromServer = res;
            console.log(res);
        });

        console.log("Response: ", responseFromServer)
        return responseFromServer !== null && responseFromServer !== "" ? responseFromServer : "Error";
};