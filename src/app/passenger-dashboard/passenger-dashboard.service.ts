import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Passenger } from "./models/passenger";
import { Observable } from "rxjs/observable";
import { ThrowStmt } from "../../../node_modules/@angular/compiler";

@Injectable()
export class PassengerDashboardService {
  PASSENGER_API: string = "http://localhost:3000/passengers";
  constructor(private http: HttpClient) {}
  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(this.PASSENGER_API);
  }
  updatePassengers(passenger: Passenger): Observable<Passenger> {
    return this.http.put<Passenger>(
      this.PASSENGER_API + `/${passenger.id}`,
      passenger
    );
  }
  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.delete<Passenger>(
      this.PASSENGER_API + `/${passenger.id}`
    );
  }
}
