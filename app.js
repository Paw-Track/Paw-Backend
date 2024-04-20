const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 9000;
const responseRoutes = require('./routes/responseRoute.js')


app.use(express.json());
app.use(cors());

app.use(responseRoutes)






app.listen(PORT, function () {
    console.log("Server started on port: ", PORT);
});
