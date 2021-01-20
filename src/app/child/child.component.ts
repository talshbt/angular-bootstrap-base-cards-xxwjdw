import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @Output() addChanged = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onAdd() {
    this.addChanged.emit("hello");
  }
}
