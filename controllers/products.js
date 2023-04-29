import { Product } from "../models/product.js";
export const getAllProducts = async (req, res) => {
  const query = {};
  const { _id, company, name, price, featured, sort, select } = req.query;
  if (_id) {
    query._id = _id // regular expression and case insensitive
  }
  if (company) {
    query.company = { $regex: company, $options: "i" }; // regular expression and case insensitive
  }
  if (name) {
    query.name = name;
  }
  if (price) {
    query.price = price;
  }
  if (featured) {
    query.featured = featured;
  }
  let fecthedData = Product.find(query); // this will return a promise
  // console.log(fecthedData);
  //http://localhost:8000/api/products/?sort=price,-name
  if (sort) {
    const sortFix = sort.split(",").join(" ");
    fecthedData = fecthedData.sort(sortFix);
  }
  if (select) {
    const selectFix = select.split(",").join(" ");
    fecthedData = fecthedData.select(selectFix);
  }
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 10;
  let skip = (page - 1) * limit;
  fecthedData = fecthedData.skip(skip).limit(limit);
  const myData = await fecthedData;
  // console.log(myData);
  res.status(200).json(myData);
};
export const getProduct = async (req, res) => {
  try{
    const myData = await Product.findById(req.params.id);
    if(myData)
      res.status(200).json(myData);
      else{
        res.sendStatus(404)
      }
  }catch(err){
    res.sendStatus(500);
  }
};
export const postProduct = async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    company: req.body.company,
  });
  try {
    const newProduct = await product.save();
    res.status(201).json({ message: `new product creation successful with id ${newProduct._id}` });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const updateProduct = async (req, res) => {
    try {
      const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Product.findByIdAndUpdate(
            id, updatedData, options
        )
        console.log(result);
        res.status(200).send({message:`Product with ${data.name} has been updayed..`})
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const putProduct = async (req,res)=>{
  
}
export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id; 
    console.log(req.params);
    const data = await Product.findByIdAndDelete(id)
    res.status(200).json({message:`Product with ${data.name} has been deleted..`})
}
catch (error) {
    res.status(404).json({ error: error.message, message:"Product not Found" })
}
}
