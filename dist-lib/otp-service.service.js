"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var OtpServiceService = /** @class */ (function () {
    function OtpServiceService(_http) {
        this._http = _http;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    OtpServiceService.prototype.getPublicOtp = function (data) {
        return this._http.post("http://10.125.63.90:10039/wps/proxy/https/desarrollo:1433/gyf.portaltransaccional.webservices.nomonetario/rest/nomonetario/generarOtpPublico", data, this.options);
    };
    OtpServiceService.prototype.validatePublicOtp = function (data) {
        return this._http.post("http://10.125.63.90:10039/wps/proxy/https/desarrollo:1433/gyf.portaltransaccional.webservices.nomonetario/rest/nomonetario/validarOtpPublico", data, this.options);
    };
    OtpServiceService = __decorate([
        core_1.Injectable()
    ], OtpServiceService);
    return OtpServiceService;
}());
exports.OtpServiceService = OtpServiceService;
