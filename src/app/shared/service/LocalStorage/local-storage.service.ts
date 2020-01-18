import { Injectable } from '@angular/core';
import { CommonFnService } from '../CommonFnService';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    local: object;

    constructor(public commonFn: CommonFnService) {
        this.local = commonFn.jsonDeepCopy(localStorage);
    }

    setItem = (key: string, value: string) => localStorage.setItem(key, value);

    getItem = (key: string) => localStorage.getItem(key);
}
