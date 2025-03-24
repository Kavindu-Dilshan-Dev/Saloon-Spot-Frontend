import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { FooterComponent } from "./common/footer/footer.component";
import { HeaderComponent } from "./common/header/header.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'SaloonSpot-frontend';

  ngOnInit(): void {
    initFlowbite();
  }
}



