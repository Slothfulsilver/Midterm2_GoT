const exp = require("express");
const https = require("https");
const app = exp();
app.engine('html',require('ejs').renderFile)
app.set("view Engine", "html");
app.use(exp.static(__dirname + '/public'));

app.get("/", (req, res) => {
    const url = "https://thronesapi.com/api/v2/Characters";


    https.get(url, (response) => {
        let respData = '';
        
        response
            .on("data", (data) => {
                respData += data;
            })   
            .on('end', (data) => {
                const gotData = JSON.parse(respData);
                console.log(gotData);
                res.render('index.ejs', {data: gotData});
            })
    });
    
   
});

app.listen(3000, () => {

});