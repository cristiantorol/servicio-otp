import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable()
export class OtpServiceService {
  public url:string;
  public headers= new Headers({
    'Content-Type':'application/json'
  });
  public options = new RequestOptions({headers : this.headers});
  constructor(
    public _http: Http
  ) {
    var origin = window.location.origin;
    var serve = (document.getElementById("server") as HTMLInputElement).value;
    this.url= origin+serve;
  }

  getPublicOtp(data){
    return this._http.post(this.url+"/gyf.portaltransaccional.webservices.nomonetario/rest/nomonetario/generarOtpPublico",data,this.options).pipe(map(res=>res.json()));;
  }

  validatePublicOtp(data){
    return this._http.post(this.url+"/gyf.portaltransaccional.webservices.nomonetario/rest/nomonetario/validarOtpPublico",data,this.options).pipe(map(res=>res.json()));;
  }

}
