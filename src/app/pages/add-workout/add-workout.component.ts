import { Component, OnInit } from '@angular/core';
import { WorkoutService } from 'src/app/services/workout.service';
import { Workout } from '../../interfaces/workout';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.scss'],
})
export class AddWorkoutComponent implements OnInit {
  workouts: Workout[] = [];

  public date!: string;
  public exercise!: string;
  public set!: number;
  public reps!: number;
  public weight!: number;

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.workoutService
      .getWorkouts()
      .subscribe((workouts) => (this.workouts = workouts));
  }

  onSubmit() {
    const newWorkout = {
      date: this.date,
      exercise: this.exercise,
      set: this.set,
      reps: this.reps,
      weight: this.weight,
    };

    this.workoutService
      .addWorkout(newWorkout)
      .subscribe((newWorkout) => this.workouts.push(newWorkout));
  }
}
