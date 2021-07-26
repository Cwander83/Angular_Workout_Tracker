import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { AddWorkoutComponent } from '../pages/add-workout/add-workout.component';
import { HomeComponent } from '../pages/home/home.component';
import { WorkoutHistoryComponent } from '../pages/workout-history/workout-history.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  { path: 'history', component: WorkoutHistoryComponent },
  { path: 'add-workout', component: AddWorkoutComponent },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  WorkoutHistoryComponent,AddWorkoutComponent,PageNotFoundComponent
]
