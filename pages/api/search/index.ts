import conn from "@libs/db";

export default async (req, res) => {
    try {
        const query = {
            text: "SELECT * FROM keyword.keywords",
            // values: ['brianc', 'brian.m.carlson@gmail.com'],
        };
        console.log("req nom", req.body);
        // const query = "INSERT INTO posts(content) VALUES($1)";
        // const values = [req.body.content];
        // const result = await conn.query(query, values);
        // console.log("ttt", result);
        await conn.query(query, (err, res) => {
            console.log(err, res);
            conn.end();
        });
    } catch (e) {
        console.log(e);
    }
};
