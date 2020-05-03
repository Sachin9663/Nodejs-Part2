const http=require('http');

const PORT=3001;
const hostname='127.0.0.1';

http.createServer((req, res) =>{
    console.log("request was made :"+ req.url)
    res.end("Server started")
}).listen(PORT,hostname,()=>{
    console.log(`server is running at http://${hostname}:${PORT}`);
})