import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeEsCO from '@angular/common/locales/es';
registerLocaleData(localeEsCO, 'es');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabButtonComponent } from './shared/tab-button/tab-button.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { SingInComponent } from './pages/sing-in/sing-in.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CredencialManagerComponent } from './pages/credencial-manager/credencial-manager.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackgroundBlobsComponent } from './shared/background-blobs/background-blobs.component';

@NgModule({
  declarations: [
    AppComponent,
    TabButtonComponent,
    LayoutComponent,
    NavBarComponent,
    SingInComponent,
    AboutUsComponent,
    CredencialManagerComponent,
    BackgroundBlobsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
  bootstrap: [AppComponent],
})
export class AppModule {}
