const express= require("express")
const  router= express.Router()
const Book= require("../module/book")
const bookcontroller= require("../contollers/controller")

router.get("/", (req, res)=> {
    res.send("hej, navigera till andra filer")
});
router.get("/book", bookcontroller.getallbooks);
router.post("/add", bookcontroller.addBook)
router.get("/book/:id", bookcontroller.getbyid)
router.put("/book/:id", bookcontroller.udddateBook)
router.delete("/book/:id", bookcontroller.delteone)


module.exports= router
