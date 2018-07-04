import { Component, Input, Output } from "@angular/core";
import { Passenger } from "../../models/passenger";

@Component({
  selector: "passenger-detail",
  templateUrl: "passenger-detail.component.html",
  styleUrls: ["passenger-detail.component.css"]
})
export class PassengerDetailComponent {
  @Input() detail: Passenger;
  editing: boolean = false;

  onNameChange(value: string) {
    this.detail.fullname = value;
  }
  toggleEdit() {
    this.editing = !this.editing;
  }
  onRemove() {
    this.editing = !this.editing;
  }
}
