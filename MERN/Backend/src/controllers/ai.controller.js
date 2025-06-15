const generateContent = require("../services/ai.service");

module.exports.getResponse = async(req, res) => {
    const prompt = req.query.prompt;
    if(!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await generateContent(prompt);
    if (!response) {
        return res.status(500).json({ error: "Failed to generate content" });
    }
    res.status(200).json(response);
}