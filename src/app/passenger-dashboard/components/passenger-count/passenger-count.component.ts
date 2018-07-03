import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "../../models/passenger";

@Component({
  selector: "passenger-count",
  templateUrl: "passenger-count.component.html",
  styleUrls: ["passenger-count.component.css"]
})
export class PassengerCountComponent {
  @Input() passengers: Passenger[];
  checkedInCount(): number {
    if (this.passengers === undefined) {
      return;
    }
    const filterPassengers = this.passengers.filter(passenger => {
      return passenger.checkedIn === true;
    }).length;
    
    return filterPassengers;
  }
}
