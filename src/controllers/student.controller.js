const getStudents = (req, res)=>{
    res.json({
        students:[]
    });
};

const addStudent = (req, res)=>{
    res.json({
        message:"Student added successfully"
    });
};

module.exports ={
    getStudents,
    addStudent
}