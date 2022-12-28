import { Component } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Student Dashboard';

  ngOnInit(): void {
    $("#toggle-sidenav").on("click", () => {
      $(".hidden-sidenav").toggleClass("hidden-sidenav-item")
    })

    $(".sidenav-item").on("mouseenter", () => {
      $(".hidden-sidenav").removeClass("hidden-sidenav-item")
    })

    $("#sidenav").on("mouseleave", () => {
      $(".hidden-sidenav").addClass("hidden-sidenav-item")
    })

    $(".sidenav-button").on("mouseenter", () => {
      $(".hidden-sidenav").removeClass("hidden-sidenav-item")
    })

  }
}
