import {mongoose} from 'mongoose'
const ItemSchema=new mongoose.Schema({
  id:{
    type:String
  },
  name:{
    type:String,
    require:true
  },
  quantity:{
    type:Number,
    require:true
  },
  cost:{
    type: Number,
    require:true
  }
});
const Item=mongoose.model("items",ItemSchema);
export default Item