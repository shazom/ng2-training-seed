import { AgupperPipe } from './agupper.pipe';
import { Logger } from './logger';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [AgupperPipe],
    providers: [Logger], 
    exports: [AgupperPipe]
})

export class SharedModule {

}