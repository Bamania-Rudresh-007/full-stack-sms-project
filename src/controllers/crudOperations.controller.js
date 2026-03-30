import Student from "../models/student.model.js";
import bcrypt from "bcrypt"

const addStudent = async(req, res) => {
    try{
        console.log(req.body);
        const password = await bcrypt.hash(req.body.password, 7);

        const newStudent = Student.create({...req.body, password});
        res.status(201).json({
            message: "Student created successfully",
            data: newStudent,
        })
    }   
    catch(error){
        res.status(400).json({
            message: "Invalid student data",
            error: error.message,
        })
    }
}

export {addStudent};    