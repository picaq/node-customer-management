// 1. Import the express and body-parser packages
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// 2. Set port variable
const port = process.env.PORT || 3000;

// 3. Create the server, making sure to add the body-parser functions after the app has been created
// const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));

app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});