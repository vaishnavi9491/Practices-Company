const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:[true,"price must be provied"],
    },
    featured:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:4.9,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:["apple","samsung","dell","mi"],
            message:`{VALUE} is not supported`,
        },
    },
});

module.exports=mongoose.model("Product",productSchema)


// const mongoose=require("mongoose");

// const productSchema=new mongoose.Schema(
//     {
        
//         "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//         "price": 109.95,
//         "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         "rating": {
//           "rate": 3.9,
//           "count": 120
//         }
//       }
// )
// module.exports=mongoose.model('Product',productSchema)