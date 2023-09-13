import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class TestentityService {
    constructor(
        private http: HttpClient,
    ) { }


  BaseURL = environment.baseUrlAPI;


  PostAlltestentityValues(data:any){

    return this.http.post(`${this.BaseURL}/testentity`,data);
  }

  GetAlltestentityValues(){
    return this.http.get(`${this.BaseURL}/testentity`);
  }

  Updatetestentity(data:any){
    return this.http.put(`${this.BaseURL}/testentity/${data.id}`,data);
  }

  getSpecifictestentity(id:number){
    return this.http.get(`${this.BaseURL}/testentity/${id}`);
  }

  getSpecifictestentityHistory(id:number){
    return this.http.get(`${this.BaseURL}/testentity/${id}/history?days=30`);
  }

  DeletetestentityValues(dataId:any){
     return this.http.delete(`${this.BaseURL}/testentity`,dataId);
  }

  GetNounById(testentityId:any): Observable<any> {
    return this.http.get(`${this.BaseURL}/testentityid/` + testentityId);
  }

  Searchtestentity(data:any): Observable<any> {
    const temp:any = [];
    const objectKeyPair = Object.entries(data);
    objectKeyPair.forEach((element, index) => {
    if (element[1]) {
    temp.push(`${element[0]}=${element[1]}`);
    }
    });
    let jwt_token = sessionStorage.getItem('JwtToken');
    return this.http.get(`${this.BaseURL}` + `/testentity/get/search?jwt_token=${jwt_token}${temp.length > 0 ? `&${temp.join('&')}` : ''}`);
  }
}