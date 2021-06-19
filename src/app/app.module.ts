import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VocablistComponent } from './vocabulay/vocablist/vocablist.component';
import{HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login/login.component';
import { FormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';
import { ProfileComponent } from './profile/profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    VocablistComponent,
    LoginComponent,
    ProfileComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule ,FormsModule,NotifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
