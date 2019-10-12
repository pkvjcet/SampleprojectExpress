var books_array=[
    {
        "booksTitle":"Recursion",
        "author":"Black Craunch",
        "gener":"Thriller",
        "desciption":"Very nice book",
        "price":250,
        "urlToImage":"http://api.randomuser.me/portraits/thumb/men/58.jpg"
    },
    {
        "booksTitle":"JAVA",
        "author":"PK ",
        "gener":"Programming",
        "desciption":"Very nice book",
        "price":250,
        "urlToImage":"http://api.randomuser.me/portraits/thumb/men/58.jpg"
    },
    {
        "booksTitle":"Python",
        "author":"Prince",
        "gener":"Programming",
        "desciption":"Very nice book",
        "price":250,
        "urlToImage":"http://api.randomuser.me/portraits/thumb/men/58.jpg"
    }
]

const express=require('express');
const router=express.Router();
router.get('/',(req,res)=>{
    res.render('index',{books_array:books_array})
})

module.exports=router;