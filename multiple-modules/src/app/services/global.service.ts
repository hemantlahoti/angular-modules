import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

    public username: string;
    public password: string;

    SetUsername(value: string): void {
        this.username = value;
    }

    SetPassword(value: string): void {
        this.password = value;
    }

    GetUsername(): string {
        return this.username;
    }

    GetPassword(): string {
        return this.password;
    }

    constructor() { }
}
