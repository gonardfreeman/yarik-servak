const express = require("express");
const app = express();
const port = 3000;

const articles = ["article 1", "article 2", "article 3"];

app.use(express.static("frontend"));

app.get("/article/:id", (req, res) => {
    if (req.params.id) {
        return res.json({ article: articles[req.params.id] || null });
    }
    return res.json({ article: null });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
