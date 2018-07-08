import { Component, OnInit } from "@angular/core";

import { Passenger } from "../../models/passenger";
import { PassengerDashboardService } from "../../passenger-dashboard.service";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.css"],
  templateUrl: "passenger-dashboard.component.html"
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  constructor(private passengerDashboardService: PassengerDashboardService) {}
  ngOnInit() {
    this.passengerDashboardService.getPassengers().subscribe(response => {
      this.passengers = response;
    });
  }
  handleEdit(event: Passenger) {
    this.passengerDashboardService
      .updatePassengers(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if (passenger.id === event.id) {
            passenger = Object.assign({}, passenger, event);
          }
          return passenger;
        });
      });
  }
  handleRemove(event: Passenger) {
    this.passengerDashboardService
      .removePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.filter((passenger: Passenger) => {
          return passenger.id !== event.id;
        });
      });
  }
}
