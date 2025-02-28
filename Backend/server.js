const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./db/config');

const port = process.env.PORT || 8001;

app.listen(port, async () => {
    await connectDB();
    console.log(`listening to port ${port}`);
})