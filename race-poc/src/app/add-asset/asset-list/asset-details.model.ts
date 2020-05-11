import { Injectable } from '@angular/core';
import { AssetDetailResponse } from 'src/app/model/asset-detail-response.model';



@Injectable()
export class AssetDetails {

    public assetData?:AssetDetailResponse;

    public constructor() { }

}