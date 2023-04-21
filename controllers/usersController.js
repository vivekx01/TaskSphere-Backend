const User = require("./../models/usersmodel")

const getuserdata = async (req,res) => {
    userdata = User.find();
    const myData = await userdata;
    res.status(200).json({myData,nbHits: myData.length})
};

module.exports = {getuserdata};