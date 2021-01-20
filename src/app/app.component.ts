import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  msg;
  name = "Angular";
  getHistoryData(msg) {
    alert("xxx");
    this.msg = msg;
  }
}
