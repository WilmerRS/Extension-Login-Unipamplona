import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
