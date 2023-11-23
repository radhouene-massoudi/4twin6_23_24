import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-msgerrors',
  templateUrl: './msgerrors.component.html',
  styleUrls: ['./msgerrors.component.css']
})
export class MsgerrorsComponent {
@Input()err:any |null=null;
}
