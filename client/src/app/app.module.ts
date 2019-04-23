import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from "./material-module";
import { FlexLayoutModule } from '@angular/flex-layout';
import { JWTInterceptor } from "./jwtinterceptor";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponentDialog } from "./components/login/login.component.dialog";
import { RegisterComponentDialog } from "./components/register/register.component.dialog";
import { AuthService } from "./services/auth.service";
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponentDialog,
    RegisterComponentDialog,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent }
    ]),
    LayoutModule,
  ],
  entryComponents: [LoginComponentDialog, RegisterComponentDialog],
  providers: [AuthService, { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true }],
  bootstrap: [AppComponent]
})

export class AppModule { }
