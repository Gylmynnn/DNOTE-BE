import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import route from "./routes/route";

const CONNECTION_DB = process.env.MONGO_CONNECTION as string
const app = express();
mongoose.connect(CONNECTION_DB, {

})

const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('DB Connected...'))
app.use(cors());
app.use(express.json());
app.use(route);

app.listen(5000, () => console.log("Server Up and Running on port 5000...."))
