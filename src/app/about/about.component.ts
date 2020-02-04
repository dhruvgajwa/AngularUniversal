import { Component, OnInit } from '@angular/core';
import  { Title, Meta} from '@angular/platform-browser';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  data = {
    name: 'Name',
    bio: 'Some bio',
    image: 'some IMage'
  }
  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {

    this.title.setTitle(this.data.name);
    this.meta.addTags([
      {name: 'twitter:card', content:'Summary'},
      {name: 'og:url', content: '/about'},
      {name: 'og:title', content: this.data.name},
      {name: 'og:description', content: this.data.bio},
      {name: 'og:image', content: this.data.image}
    ]);
  }

}
