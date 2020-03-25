import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DonationInfo } from '@app/shared/models';

@Injectable({
    providedIn: 'root'
})
export class DonationService {
    BASE_URL = 'https://api.sayobot.cn/';

    // supportList: https://api.sayobot.cn/static/supportlist

    constructor(private http: HttpClient) {}

    getDonationInfo(): Observable<DonationInfo> {
        return this.http
            .get(`${this.BASE_URL}support`)
            .pipe(map((res: { data: DonationInfo }) => res.data));
    }
}