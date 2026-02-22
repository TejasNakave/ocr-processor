const express = require("express");

const app = express();
app.use(express.json());

// IMPORTANT: Render assigns dynamic port
const PORT = process.env.PORT || 3000;

app.post("/process", async (req, res) => {
    const fileName = req.body.fileName;

    console.log(`Received file: ${fileName}`);

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 5000));

    console.log(`Processing completed: ${fileName}`);

    res.json({
        status: "SUCCESS",
        message: "File processed successfully"
    });
});

// Health check route (Render needs this)
app.get("/", (req, res) => {
    res.send("OCR Processing App Running");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
