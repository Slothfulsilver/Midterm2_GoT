const exp = require("express");
const https = require("https");

const app = exp();

app.get("/", (req, res) => {
    const url = "https://anapioficeandfire.com/api/characters/";
    https.get(url, (response) => {
        let respData = '';
        response
            .on("data", (data) => {
                respData += data;
            })   
            .on('end', (data) => {
                const gotData = JSON.parse(respData);
                console.log(gotData);
            })
    });
    res.sendFile(__dirname +'/Views/index.html');
});

app.listen(3000, () => {

});