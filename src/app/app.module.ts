import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Needed for Touch functionality of Material Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { PendingInterceptorModule } from '../@fury/shared/loading-indicator/pending-interceptor.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { DrinkingComponent } from './drinking/drinking.component';
import { GenericNameTableModule } from './generic-name-table/generic-name-table.module';
import { MusicComponent } from './music/music.component';
import { GenericNameTableComponent } from './generic-name-table/generic-name-table.component';
import { FamilyComponent } from './family/family.component';
import { WorkComponent } from './work/work.component';
import { StatusComponent } from './status/status.component';
import { SmokingComponent } from './smoking/smoking.component';
import { PurposeComponent } from './purpose/purpose.component';

@NgModule({
  imports: [
    // Angular Core Module // Don't remove!
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Fury Core Modules
    AppRoutingModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    // Layout Module (Sidenav, Toolbar, Quickpanel, Content)
    LayoutModule,
    GenericNameTableModule,
    // Displays Loading Bar when a Route Request or HTTP Request is pending
    PendingInterceptorModule,
    // Register a Service Worker (optional)
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [AppComponent, WorkComponent, StatusComponent, SmokingComponent, PurposeComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'fill'
      } as MatFormFieldDefaultOptions
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 5000,
        horizontalPosition: 'end',
        verticalPosition: 'bottom'
      } as MatSnackBarConfig
    }
  ]
})
export class AppModule {
}
