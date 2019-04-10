import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { StudentsComponent } from './students/students.component';
import { AvailableCorsesComponent } from './available-corses/available-corses.component';
import { HelpInfoComponent } from './help-info/help-info.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { SelectCoursesComponent } from './select-courses/select-courses.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { FormsModule } from '@angular/forms';
import { MustMatchDirective } from './directives/must-match.directive';
import { LoginComponent } from './login/login.component';
import { TokenViewComponent } from './token-view/token-view.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StudentsComponent,
    AvailableCorsesComponent,
    HelpInfoComponent,
    AboutComponent,
    FooterComponent,
    StudentDetailComponent,
    SelectCoursesComponent,
    ActivateAccountComponent,
    CreateAccountComponent,
    MustMatchDirective,
    LoginComponent,
    TokenViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
