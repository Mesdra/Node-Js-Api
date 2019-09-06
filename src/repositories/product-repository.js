'use strict';


const mongoose = require('mongoose');
const Product = mongoose.model('Product');


exports.get = async() => {
    const res = await Product.find({active:true},'title price slug');
    return res
}

exports.getBySlug = (slug) => {
    return Product.findOne({
        slug: slug,
        active:true
    },'title description price slug tags');
}

exports.getByTag = (tag) => {
    return  Product.find({
        tags: tag,
        active:true
    },'title description price slug tags');
}

exports.getById = (id) => {
    return Product.findById(id);
}

exports.create = (body) => {
    let product = new Product(body);
    return product.save()
}

exports.update = (id,body) => {
   return  Product.findByIdAndUpdate(id,{
                $set:{
                    title: body.title,
                    description: body.description,
                    price: body.price
                }

            })
}

exports.delete = (id) => {
   return  Product.findOneAndRemove(id);
}