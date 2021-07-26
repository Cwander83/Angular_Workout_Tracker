import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workout } from '../interfaces/workout';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private apiUrl = 'http://localhost:5000/workouts';

  constructor(private http: HttpClient) {}

  // api call from dummy db.json
  getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.apiUrl);
  }

  addWorkout(workout: Workout): Observable<Workout> {
    return this.http.post<Workout>(this.apiUrl, workout, httpOptions);
  }
}
