import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    FooterComponent,
    NavigationComponent,
    StudentsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: '',
      component: HomeComponent
    },
   {
     path: 'students',
     component: StudentsComponent
   },
   {
     path: 'students:/studId',
     component: StudentComponent
   }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
