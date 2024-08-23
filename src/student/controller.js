const pool = require('../../db')
const queries = require('./queries')


const getStudents = (req,res)=>{
    pool.query(queries.getStudents, (error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getStudentsById = (req,res)=>{
    const id = req.params.id;
    pool.query(queries.getStudentsById, [id], (error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const addStudents = (req,res)=>{
    const{name, email, age, dob} = req.body;

    //check if email exists
    pool.query(queries.checkEmailExists, [email], (error, results)=>{
        if(results.rows.length){
            res.send("Email already exists.")
        }
    //add students to db    
    pool.query(queries.addStudents, [name, email, age, dob], (error,results)=>{
        if(error) throw error;
        res.status(201).json({message: "Student Created successfully!"});

    })    
    })
}

const deleteStudentsById = (req,res)=>{

const id = parseInt(req.params.id);
 
    pool.query(queries.getStudentsById, [id], (error,results)=>{
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send("Student does not exist in the database")
        }
    })


    pool.query(queries.deleteStudentsById, [id], (error,results)=>{
        if(error) throw error;
        res.status(200).json({message: "Student deleted successfully!"});
    })
}

const updateStudentById = (req,res)=>{
    const id = parseInt(req.params.id);
    const{name} = req.body;
    pool.query(queries.getStudentsById, [id], (error,results)=>{
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send("Student does not exist in the database")
        }


    pool.query(queries.updateStudentById, [name, id], (error, results)=>{
            if(error) throw error;
            res.status(200).json({message: "Student updated successfully!"});
    })
    })
}




module.exports = {
    getStudents,
    getStudentsById,
    addStudents,
    deleteStudentsById,
    updateStudentById,
}

