import { LoginComponent } from './pages/sing-in/login/login.component';
import { HomeComponent } from './pages/sing-in/home/home.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CredencialManagerComponent } from './pages/credencial-manager/credencial-manager.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackgroundBlobsComponent } from './shared/background-blobs/background-blobs.component';
import { SocialBarComponent } from './shared/social-bar/social-bar/social-bar.component';
import { BrandComponent } from './shared/brand/brand.component';

@NgModule({
  declarations: [
    AppComponent,
    TabButtonComponent,
    LayoutComponent,
    NavBarComponent,
    HomeComponent,
    AboutUsComponent,
    CredencialManagerComponent,
    BackgroundBlobsComponent,
    SocialBarComponent,
    LoginComponent,
    BrandComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule  ,
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
  bootstrap: [AppComponent],
})
export class AppModule {}
