import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @Output() historyDataChanged = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onSendHistoryData() {
    this.historyDataChanged.emit("historyDataChanged");
  }
}
