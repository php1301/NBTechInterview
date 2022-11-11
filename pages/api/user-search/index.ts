import conn from "@libs/db";

export default async (req, res) => {
    const client = await conn.connect();

    try {
        const { user, keyword } = req.body?.payload;
        const sql1 =
            "SELECT *" +
            " FROM keyword.user_keyword uskw" +
            " INNER JOIN keyword.keywords kw" +
            " on uskw.keyword_name = kw.keyword_name" +
            " where uskw.user_email LIKE $1 and uskw.keyword_name LIKE $2";
        const sql2 =
            "SELECT *" +
            " FROM keyword.user_keyword uskw" +
            " INNER JOIN keyword.keywords kw" +
            " on uskw.keyword_name = kw.keyword_name";
        const query = {
            text: keyword ? sql1 : sql2,
            values: keyword ? [user?.email, `${keyword}%`] : [],
        };

        const result = await await client.query(query);
        res.status(200).json({ result: result.rows });
    } catch (e) {
        res.status(500).json({ message: `Error ${e}` });
        console.log(e);
    } finally {
        client.release();
    }
};
