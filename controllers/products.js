const { query } = require("express");
const product = require("../models/product");
const Product = require("../models/product");

const getAllProducts = async (req, res) => {
    // const myData=await Product.find({name:"iphone"})
    const { company, name, featured, sort, select } = req.query
    const queryObject = {};

    if (company) {
        queryObject.company = company;

    }

    if (featured) {
        queryObject.featured = featured;

    }

    if (name) {
        queryObject.name = { $regex: name, $options: "s" };

    }

    let apiData = Product.find(queryObject);

    if (sort) {

        // let sortFix=sort.replace("," ," ");
        let selectFix = select.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }

    // (select=name),company;

    if (select) {
        // let selectFix=select.replace("," ," ");
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;
    let skip = (page - 1) * limit;
    apiData = apiData.skip(skip).limit(limit);
    // page=2;
    // limit=3;
    // skip=1*3=3

    console.log(queryObject);


    const Products = await apiData;
    res.status(200).json({ Products, nbHits: Products.length });
};

const getAllProductsTesting = async (req, res) => {
    console.log(req.query);
    const myData = await Product.find(req.query).skip(2);
    // .select("name company");
    //     console.log(
    //    "~file:product.js~line10~ getAllProductsTesting~ req.query",
    //    req.query
    //    )

    res.status(200).json({ myData })
};
module.exports = { getAllProducts, getAllProductsTesting };