import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
   
    HttpClientModule,
    RouterModule.forRoot([{
      path: '',
      component: HomeComponent
    },
    {
    path: 'todos',
    component: TodosComponent
    }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
