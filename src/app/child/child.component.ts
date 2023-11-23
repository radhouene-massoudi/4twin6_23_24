import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
klass='4twin6'
  showMsg(){
    alert("This is a message from child component");
  }
}
