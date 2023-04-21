const getuserdata = async (req,res) => {
    res.status(200).json({username:"vivek",password:"1234"})
};

module.exports = {getuserdata};