
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const testentitySchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   corprate: { type: String },
   modules: { type: String }
})

const testentityModel = mongoose.model('testentity', testentitySchema, 'testentity');
export default testentityModel;
