import { Request, Response } from 'express';
import { testentityService } from '../service/testentityService';
import { CustomLogger } from '../config/Logger'
let testentity = new testentityService();

export class testentityController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    testentity.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testentityController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testentityController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    testentity.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testentityController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testentityController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    testentity.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testentityController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testentityController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    testentity.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testentityController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testentityController.ts: GpUpdate');
    })}
public GpGetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    testentity.GpGetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testentityController.ts: GpGetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testentityController.ts: GpGetEntityById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    testentity.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testentityController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testentityController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    testentity.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testentityController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testentityController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    testentity.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testentityController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testentityController.ts: GpGetNounCreatedBy');
    })}


}