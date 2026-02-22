const express = require("express");

const app = express();
app.use(express.json());

const PORT = 3000;

// Processing API
app.post("/process", async (req, res) => {
    const fileName = req.body.fileName;

    console.log(`Received file for processing: ${fileName}`);

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 5000));

    console.log(`Processing completed: ${fileName}`);

    // Always success for now
    res.json({
        status: "SUCCESS",
        message: "File processed successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Processing App running on port ${PORT}`);
});