import { Component, OnChanges, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "../../models/passenger";


@Component({
  selector: "passenger-detail",
  templateUrl: "passenger-detail.component.html",
  styleUrls: ["passenger-detail.component.css"]
})
export class PassengerDetailComponent implements OnChanges, OnInit {

  @Input()
  detail: Passenger;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;

  constructor() {}

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  onNameChange(value: string) {
    this.detail.fullname = value;
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }
  onRemove() {
    this.remove.emit(this.detail);
  }
}
