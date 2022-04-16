import { ModuleWithProviders, NgModule } from '@angular/core';
import { GlobalService } from './global.service';

@NgModule({})
export class ServicesModule {

  static forRoot(): ModuleWithProviders<ServicesModule> {
    return {
        ngModule: ServicesModule,
        providers: [GlobalService]
    };
}
}
