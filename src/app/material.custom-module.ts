import { 
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatGridListModule, 
    MatCardModule, 
    MatMenuModule,
    MatTooltipModule,
    MatSliderModule
} from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule,
        MatSidenavModule, 
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatGridListModule, 
        MatCardModule, 
        MatMenuModule,
        MatTooltipModule,
        MatSliderModule
    ],
    exports: [
        MatButtonModule,
        MatSidenavModule, 
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule, 
        MatListModule,
        MatGridListModule, 
        MatCardModule, 
        MatMenuModule,
        MatTooltipModule,
        MatSliderModule
    ]
})
export class MaterialModule {

}