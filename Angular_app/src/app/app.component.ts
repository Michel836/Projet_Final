import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FakeComponent } from './fake/fake.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FakeComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FakeNews';
}
