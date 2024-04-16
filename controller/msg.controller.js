const { setByShopid,getDesc } = require("../service/msg.service");

module.exports = {
    setByShopid: (req, res) => {
        const body = req.body;
        console.log(body);
        const data = {
            shopid: body.shopid,
            description: body.description,
            link: body.link,
            imgLink: body.imgLink
        };
        console.log("data",data);
        setByShopid(data, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getDesc: (req, res) => {
        const shopid = req.params.shopid;
        getDesc(shopid, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    }
};
