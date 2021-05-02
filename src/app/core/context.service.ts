import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ContextService {
    constructor() { }
    setAccount(accountId: string) {
        localStorage.setItem('Account', accountId);
    }
    getAccount() {
        localStorage.getItem('Account');
    }
}