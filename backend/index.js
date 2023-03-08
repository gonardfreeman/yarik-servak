const express = require("express");
const app = express();
const port = 4000;

const articles = ["article 1", "article 2", "article 3"];

app.use(express.static("frontend"));

app.get("/article/:id", (req, res) => {
    let id = Number(req.params.id);
    const num = id - 1;
    if (!isNaN(id) && articles[num]) {
        console.log(num);
        return res.json({ article: articles[num] || null });
    }
    return res.json({ article: null });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
