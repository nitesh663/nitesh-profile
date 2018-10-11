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
    MatTooltipModule
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
        MatTooltipModule
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
        MatTooltipModule
    ]
})
export class MaterialModule {

}