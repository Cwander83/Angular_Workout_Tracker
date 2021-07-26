import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/interfaces/workout';
import { WorkoutService } from 'src/app/services/workout.service';
@Component({
  selector: 'app-workout-history',
  templateUrl: './workout-history.component.html',
  styleUrls: ['./workout-history.component.scss']
})
export class WorkoutHistoryComponent implements OnInit {
  public workouts: Workout[]= [];
  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.workoutService.getWorkouts().subscribe((workouts)=> this.workouts = workouts)
  }


}
