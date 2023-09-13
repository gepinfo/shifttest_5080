import * as mongoose from 'mongoose';
import { featureinventorySchema } from './models/daomodels/featureinventory';
import * as mongoose from 'mongoose';
import { testentitySchema } from './models/daomodels/testentity';

const testentityModel = mongoose.model('testentity', testentitySchema);

export class Seed {

    constructor() {

    }

    

}
