var express=require('express');
var bodyParser=require('body-parser');
var app=new express();
const path=require('path');
var bookrouter=require('./routes/books')
var authorsrouter=require('./routes/authors')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs');

app.use('/',bookrouter);
//app.use('/author',authorsrouter);

app.use(express.static(path.join(__dirname,"/public")));


app.listen(process.env.PORT || 3000,()=>{
    console.log("Listening")
})