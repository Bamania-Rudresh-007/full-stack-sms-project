import Student from "../models/student.model.js";

const addStudent = async(req, res) => {
    try{
        const compiledStudent = {...req.body, userId: req.user.id};

        const newStudent = await Student.create(compiledStudent);
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

const getAllStudent = async(req, res) => {
    try{
        const students = await Student.find({userId: req.user.id});

        res.status(200).json({
            message: "All studnets fetched and retured",
            data: students,
        });
    }
    catch(error){
        res.status(500).json({
            message: "Iternal server error",
            error: error.message,
        })
    }
}

const updateStudent = async(req, res) => {
    try{
        await Student.findByIdAndUpdate(
            {
                _id: req.params.id,
                userId: req.user.id
            },
            req.body
        );

        res.status(204).json({
            message: "Student updated successfully",
        })
    }
    catch(err){
        res.statas(500).json({
            message: "Internal server error failed to update student",
            error: err.message,
        })
    }
}


const deleteStudent = async(req, res) => {
    try{
        const deletedStudent = await Student.findByIdAndDelete(
            {
                _id: req.params.id,
                userId: req.user.id
            },
        );

        res.status(204).json({
            message: "Student deleted Successfully",
            data: deletedStudent,
        })
    }   
    catch(err){
        res.statas(500).json({
            message: "Internal server error failed to delte student",
            error: err.message,
        })
    }
}

export {getAllStudent ,addStudent, updateStudent, deleteStudent};    