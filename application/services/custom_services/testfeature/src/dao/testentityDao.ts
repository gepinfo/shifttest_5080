import * as mongoose from 'mongoose';
import testentityModel from '../models/daomodels/testentity';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class testentityDao {
    private testentity = testentityModel;
    constructor() { }
    
    public async GpDelete(testentityId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testentityDao.ts: GpDelete');

    

    
    
    
    this.testentity.findByIdAndRemove(testentityId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from testentityDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(testentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testentityDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(testentityData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.testentity.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from testentityDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(testentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testentityDao.ts: GpSearchForUpdate');

    

    
    
    
    this.testentity.findOneAndUpdate({ _id: testentityData._id }, testentityData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from testentityDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(testentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testentityDao.ts: GpUpdate');

    

    
    
    
    this.testentity.findOneAndUpdate({ _id: testentityData._id }, testentityData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from testentityDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetEntityById(testentityId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testentityDao.ts: GpGetEntityById');

    

    
    
    
    this.testentity.findById(testentityId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from testentityDao.ts: GpGetEntityById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into testentityDao.ts: GpGetAllValues');

    

    
    
    
    this.testentity.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from testentityDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(testentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testentityDao.ts: GpCreate');

    let temp = new testentityModel(testentityData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from testentityDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(testentityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testentityDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.testentity.aggregate(([
                        { $match: { $and: [{ created_by: testentityData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from testentityDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}