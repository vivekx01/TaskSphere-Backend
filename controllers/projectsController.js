const getprojects = async (req,res) => {
    res.status(200).json({msg:"getprojects route"})
};
const getprojectdetail = async (req,res) => {
    res.status(200).json({username:"getprojectdetails route"})
};


module.exports = {getprojects,getprojectdetail};