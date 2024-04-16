const pool = require("../config/db");

module.exports = {
    setByShopid: (data, callBack) => {
        pool.query(
            `INSERT INTO desctable(shopid, description, link, imgLink) 
            VALUES (?, ?, ?, ?)
            ON DUPLICATE KEY UPDATE description = VALUES(description), link = VALUES(link), imgLink = VALUES(imgLink);`,
            [
                data.shopid,
                data.description,
                data.link,
                data.imgLink
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getDesc: (shopid, callBack) => {
        pool.query(
            `SELECT * FROM desctable WHERE shopid = ?`,
            [shopid],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
};
