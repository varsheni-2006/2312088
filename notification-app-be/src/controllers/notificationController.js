const axios=require("axios");
const Log=require("../logger/Log");
require("dotenv").config();

exports.getNotifications=async(req,res)=>{

    try{

        await Log(
            "backend",
            "info",
            "controller",
            "Fetching notifications"
        );

        const response=await axios.get(

            "http://4.224.186.213/evaluation-service/notifications",

            {

                headers:{

                    Authorization:`Bearer ${process.env.TOKEN}`

                }

            }

        );

        res.json(response.data);

    }

    catch(err){

        await Log(
            "backend",
            "error",
            "controller",
            "Notification API failed"
        );

        if(err.response){
            return res.status(err.response.status).json(err.response.data);
        }

        res.status(500).json({

            message:"Server Error"

        });

    }

}