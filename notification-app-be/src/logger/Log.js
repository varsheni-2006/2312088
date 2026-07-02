const axios = require("axios");
require("dotenv").config();

async function Log(stack, level, packageName, message) {

    try{

        await axios.post(
            "http://4.224.186.213/evaluation-service/logs",

            {
                stack,
                level,
                package:packageName,
                message
            },

            {
                headers:{
                    Authorization:`Bearer ${process.env.TOKEN}`,
                    "Content-Type":"application/json"
                }
            }

        );

    }

    catch(err){

        console.log("Log Error");

    }

}

module.exports=Log;