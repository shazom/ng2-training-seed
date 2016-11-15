import { Injectable } from '@angular/core';

@Injectable()
export class Logger {

    public log(value: string): void {
        console.log(`logger logged: ${value}`);
    }

}