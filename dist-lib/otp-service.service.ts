import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable()
export class OtpServiceService {

  public headers= new Headers({
    'Content-Type':'application/json'
  });
  public options = new RequestOptions({headers : this.headers});
  constructor(
    public _http: Http
  ) {}

  getPublicOtp(data){
    return this._http.post("http://10.125.63.90:10039/wps/proxy/https/desarrollo:1433/gyf.portaltransaccional.webservices.nomonetario/rest/nomonetario/generarOtpPublico",data,this.options);
  }

  validatePublicOtp(data){
    return this._http.post("http://10.125.63.90:10039/wps/proxy/https/desarrollo:1433/gyf.portaltransaccional.webservices.nomonetario/rest/nomonetario/validarOtpPublico",data,this.options);
  }

}
