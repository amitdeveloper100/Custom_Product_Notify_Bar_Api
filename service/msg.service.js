const pool = require("../config/db");

module.exports = {
    setByShopid: (data, callBack) => {
        pool.query(
            `INSERT INTO desctable(shopid, description, link, image) 
            VALUES (?, ?, ?, ?)
            ON DUPLICATE KEY UPDATE description = VALUES(description), link = VALUES(link), image = VALUES(image) ;`,
            [
                data.shopid,
                data.description,
                data.link,
                data.image
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
};
