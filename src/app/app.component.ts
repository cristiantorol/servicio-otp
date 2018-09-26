import { Component } from '@angular/core';
import { OtpServiceService } from './otp';


@Component({
  selector: 'otp-lib-gyf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[OtpServiceService]
})
export class AppComponent {
  title = 'otp-lib-gyf';

  constructor(
    public _otpService: OtpServiceService
  ){}

  ngOnInit(){
    this.getPublicOtp();
  }

  getPublicOtp(){
    var temp = {
      "seguridad": { 
        "tipoDocumento": "CC", 
        "numeroDocumento": "10011157", 
        "sessionId": "ab2c496c-9991-4a80-5564-7ecd52d09ea5", 
        "token": null 
      },
      "requestId": "ab2c496c-9991-4a80-5564-7ecd68d13ea5",
      "operacion": "generar",
      "portlet": "otp",
      "appOrigen": "gyf",
      "ip":"123.15.20.1"
    }
    this._otpService.getPublicOtp(temp).subscribe(
      result=>{
        console.log(result);
      }
    );
  }

}
