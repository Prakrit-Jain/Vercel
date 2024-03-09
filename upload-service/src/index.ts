import express from "express";
import cors from "cors";

const app = express();
app.use(cors())
app.use(express.json());

app.post("/deploy", (req, res) => {
    try {
        const repoUrl = req.body.repoUrl;
        console.log(repoUrl);

        res.json({})
    } catch (err) {
        res.status(500).send({
          status: false,
          message: 'Unexpected error occurred',
        });
    }
})

app.listen(3000);
