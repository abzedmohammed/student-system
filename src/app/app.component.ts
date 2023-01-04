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
      $(".hide-all").toggleClass("hidden-sidenav-item")
      $(".fixed").toggleClass("h-full")
    })

    // $(".sidenav-item").on("mouseenter", () => {
    //   $(".hidden-sidenav").removeClass("hidden-sidenav-item")
    //   $(".fixed").addClass("h-full")
    // })

    $("#sidenav").on("mouseleave", () => {
      $(".hidden-sidenav").addClass("hidden-sidenav-item")
      $(".hide-all").addClass("hidden-sidenav-item")
      $(".fixed").removeClass("h-full")
    })

    // $(".sidenav-button").on("mouseenter", () => {
    //   $(".hidden-sidenav").removeClass("hidden-sidenav-item")
    //   $(".fixed").addClass("h-full")
    // })

  }
}
