const getTasks= (req, res) => {
    res.json ({
        tasks: [] 

    });
};

const addTask = (req,res)=>{
    res.json({
        message: "task added successfully"
    });
};

module.exports={
    getTasks,
    addTask
}