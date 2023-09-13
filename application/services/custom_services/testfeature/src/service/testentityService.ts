import { Request, Response } from 'express';
import {testentityDao} from '../dao/testentityDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let testentity = new testentityDao();

export class testentityService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testentityService.ts: GpDelete')
     let  testentityId = req.params.id;
     testentity.GpDelete(testentityId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testentityService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testentityService.ts: GpSearch')
     let  testentityData = req.query;
     testentity.GpSearch(testentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testentityService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testentityService.ts: GpSearchForUpdate')
     let  testentityData = req.body;
     testentity.GpSearchForUpdate(testentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testentityService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testentityService.ts: GpUpdate')
     let  testentityData = req.body;
     testentity.GpUpdate(testentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testentityService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testentityService.ts: GpGetEntityById')
     let  testentityId = req.params.id;
     testentity.GpGetEntityById(testentityId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testentityService.ts: GpGetEntityById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testentityService.ts: GpGetAllValues')
     
     testentity.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from testentityService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testentityService.ts: GpCreate')
     let  testentityData = req.body;
     testentity.GpCreate(testentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testentityService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testentityService.ts: GpGetNounCreatedBy')
     let  testentityData = { created_by: req.query.createdby };
     testentity.GpGetNounCreatedBy(testentityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testentityService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}