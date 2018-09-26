import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtpComponent } from './otp/otp.component';
import { HttpModule, Http } from '@angular/http';
import { OtpServiceService } from './otp-service.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [OtpComponent],
  exports:[OtpComponent]
})
export class OtpModule {
  static forRoot(){
    return{
      ngModule:OtpModule,
      providers:[OtpServiceService]
    }
  }
 }
