const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;
// console.log(userRouter)


app.use(express.json());
app.use(cors());






app.listen(PORT, function () {
    console.log("Server started on port: ", PORT);
});
