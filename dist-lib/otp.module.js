"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var otp_component_1 = require("./otp/otp.component");
var http_1 = require("@angular/http");
var otp_service_service_1 = require("./otp-service.service");
var OtpModule = /** @class */ (function () {
    function OtpModule() {
    }
    OtpModule_1 = OtpModule;
    OtpModule.forRoot = function () {
        return {
            ngModule: OtpModule_1,
            providers: [otp_service_service_1.OtpServiceService]
        };
    };
    var OtpModule_1;
    OtpModule = OtpModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                http_1.HttpModule
            ],
            declarations: [otp_component_1.OtpComponent],
            exports: [otp_component_1.OtpComponent]
        })
    ], OtpModule);
    return OtpModule;
}());
exports.OtpModule = OtpModule;
