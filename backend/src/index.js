import app from './app.js'
 const port=process.env.port||5000;
 app.listen(port,()=>{
    console.log("application started")
 })
 