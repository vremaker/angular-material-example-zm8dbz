import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent   {
  
  links : Array<string>;

  ngOnInit(){
    this.links = ["www.google.com", "www.msn.com"]
  }
  
}
