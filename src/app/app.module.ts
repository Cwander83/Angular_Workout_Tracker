import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WorkoutHistoryComponent } from './pages/workout-history/workout-history.component';
import { AddWorkoutComponent } from './pages/add-workout/add-workout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { WorkoutCardComponent } from './components/workout-card/workout-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    WorkoutHistoryComponent,
    AddWorkoutComponent,
    PageNotFoundComponent,
    HomeComponent,
    WorkoutCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
