const { setByShopid } = require("../service/msg.service");

module.exports = {
    setByShopid: (req, res) => {
        const body = req.body;
        console.log(body);

        // Check if file is uploaded
        if (!req.file) {
            return res.status(400).json({
                success: 0,
                message: "No file uploaded"
            });
        }
         const fileExtension = req.file.originalname.split('.').pop();
         const imageFilename = `${body.shopid}.${fileExtension}`;
        console.log(imageFilename);
        const data = {
            shopid: body.shopid,
            description: body.description,
            link: body.link,
            image: imageFilename
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
    }
};
