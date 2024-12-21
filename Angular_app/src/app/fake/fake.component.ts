import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SendUrlService } from '../send-url.service';
import { Message } from './message';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'fake-component',
  standalone: true,
  imports: [HeaderComponent, FormsModule],
  templateUrl: './fake.component.html',
  styleUrl: './fake.component.css'
})
export class FakeComponent {

  constructor(private service:SendUrlService){}

  isFakeNews:any
  article:String=""
  url:String="google.fr"
 
  IsFakeNewsUrl():void
  {
    this.service.postURL(this.url).subscribe(response => this.isFakeNews = response);
  }

  IsFakeNewsArticle():void
  {
    this.service.postURL(this.article).subscribe(response => this.isFakeNews = response);
  }

}
