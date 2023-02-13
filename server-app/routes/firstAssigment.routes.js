const express = require('express');
const router = express.Router();
const studentValidation = require('../validation/student.validation');
module.exports = router;

router.get('/getRequst', (req, res) => {
    res.status(200).send({ message: "This is simple get request" });
})

router.post('/postRequest', (req, res) => {
    if (studentValidation.createStudentSchema.validate(req.body).error) {
     return    res.status(400).send(studentValidation.createStudentSchema.validate(req.body).error.details)
    }

    try {
        res.send({ message: "student post request", data: req.body })
    } catch (error) {
        res.send({ message: "Internal Server Error" })
    }
});


module.exports = router;