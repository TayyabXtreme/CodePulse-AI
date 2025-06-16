const generateContent = require("../services/ai.service");

module.exports.getReview = async(req, res) => {
    const code = req.body.code;
    if(!code) {
        return res.status(400).json({ error: "code is required" });
    }

    const response = await generateContent(code);
    if (!response) {
        return res.status(500).json({ error: "Failed to generate content" });
    }
    res.status(200).json(response);
}