const getCourses= (req, res) => {
    res.json({
        courses:[]
    });
};

const addCourse= (req, res) => {
    res.json({
        message:"course added successfully"
    });
};

module.exports = {
    getCourses,
    addCourse
};


