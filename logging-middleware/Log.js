const axios = require("axios");

async function Log(stack, level, packageName, message) {
    try {
        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/logs",
            {
                stack: stack,
                level: level,
                package: packageName,
                message: message
            },
            {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzEyMDg4QG5lYy5lZHUuaW4iLCJleHAiOjE3ODI5NzE4NzgsImlhdCI6MTc4Mjk3MDk3OCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImVhY2JjYjEzLWYwMTAtNGMwZS05NTMzLTM2YmU3ZmI3NTJlZSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InJhamEgdmFyc2hlbmkgYSIsInN1YiI6ImU2ZTJlODhjLWVkN2ItNGY0Yy05Yzk2LWI2YmQ2ZTAzN2Q2OCJ9LCJlbWFpbCI6IjIzMTIwODhAbmVjLmVkdS5pbiIsIm5hbWUiOiJyYWphIHZhcnNoZW5pIGEiLCJyb2xsTm8iOiIyMzEyMDg4IiwiYWNjZXNzQ29kZSI6IkVSelV5eCIsImNsaWVudElEIjoiZTZlMmU4OGMtZWQ3Yi00ZjRjLTljOTYtYjZiZDZlMDM3ZDY4IiwiY2xpZW50U2VjcmV0IjoiVllDclJxa3lSbkVudXhDeiJ9.sb00zwIzlQ8aNYrUHgACrPTr-MMn62mqbjhHumBJuvw",
                    "Content-Type": "application/json"
                }
            }
        );

        console.log(response.data);

    } catch (err) {

        if (err.response) {
            console.log("Status:", err.response.status);
            console.log("Response:", err.response.data);
        } else {
            console.log(err.message);
        }

    }
}

module.exports = Log;