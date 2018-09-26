import { Http, Response, Headers, RequestOptions } from '@angular/http';
export declare class OtpServiceService {
    _http: Http;
    headers: Headers;
    options: RequestOptions;
    constructor(_http: Http);
    getPublicOtp(data: any): import("rxjs/Observable").Observable<Response>;
    validatePublicOtp(data: any): import("rxjs/Observable").Observable<Response>;
}
