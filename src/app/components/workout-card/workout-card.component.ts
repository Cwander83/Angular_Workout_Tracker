import { Component, OnInit, Input } from '@angular/core';
import { Workout } from 'src/app/interfaces/workout';
@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss'],
})
export class WorkoutCardComponent implements OnInit {
  @Input() workout!: Workout;

  constructor() {}

  ngOnInit(): void {}
}
