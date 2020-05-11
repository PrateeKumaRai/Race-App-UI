import { Injectable } from '@angular/core';

import { capAsset } from '../capAsset.module';
 
@Injectable()
export class capAssetsRes {
 
    public storage?: capAsset[];
    
 
    public constructor() { }
 
}