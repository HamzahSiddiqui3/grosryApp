const product = require("./../database/model/product");

exports.addProduct = async(req, res, next) => {
    try {

        const { p_name, p_qty, p_qtySold, p_status, p_category } = req.body;

        const products = new product({
            p_name,
            p_qty,
            p_qtySold,
            p_status,
            p_category
        })
        if (req.userData.role === "admin") {
            const savedProduct = await products.save();
            res.status(201).json({
                message: "product Saved",
                body: products
            })
        } else {
            res.status(401).json({
                message: "chalbe"
            })
        }

    } catch (error) {
        console.log(error)
    }

}


exports.showProducts = async(req, res, next) => {
    try {
        if (req.userData.role) {


            const allProducts = await product.find();
            res.status(200).json({
                message: 'product fetched',
                product: allProducts
            })

        }
    } catch (error) {
        res.status(401).json({
            message: "chalbe"
        })
    }
}

exports.editProducts = async(req, res, next) => {
    try {
        const id = req.params.id;

        const { p_name, p_qty, p_qtySold, p_status, p_category } = req.body;
        const updated = await product.updateOne({ _id: id }, { $set: { p_name: p_name, p_qty: p_qty, p_qtySold: p_qtySold, p_status: p_status, p_category: p_category } });
        console.log(updated);
        res.status(201).json({
            message: "updated Product",
            updatedproduct: updated
        })
    } catch (error) {
        res.json(error)
    }
}


exports.deleteProducts = async(req, res, next) => {
    try {
        const id = req.params.id;
        const deletedProducts = await product.deleteOne({ _id: id });
        res.status(200).json({
            "message": "product Deleted",
            "deletedProduct": deletedProducts
        })
    } catch (error) {
        res.json({
            messahe: "Unathorised"
        })
    }

}