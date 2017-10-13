import { Component, OnInit, Input } from '@angular/core';
import { Button } from "../classes/button";

@Component({
  selector: 'app-standard-button',
  templateUrl: './standard-button.component.html'
})
export class StandardButtonComponent extends Button implements OnInit {
  @Input() name: string;
  @Input() size: string;
  @Input() style: string;
  @Input() action: Function;

  ngOnInit() {
  }

}
