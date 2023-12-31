const exp = require("express");
const https = require("https");
const app = exp();
app.engine('html',require('ejs').renderFile)
app.set("view Engine", "html");
app.use(exp.static(__dirname + '/public'));

const url = "https://thronesapi.com/api/v2/Characters";



app.get("/", (req, res) => {
    
    https.get(url, (response) => {
        let respData = '';
        
        response
            .on("data", (data) => {
                respData += data;
            })   
            .on('end', (data) => {
                const gotData = JSON.parse(respData);
                res.render('index.ejs', {data: gotData});
            })
    });
    
   
});


app.get("*", (req, res) => {  
    res.render('error.ejs');
  }); 

app.listen(3000, () => {

});

