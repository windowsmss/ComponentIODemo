import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-secong-child-component',
  templateUrl: './secong-child-component.component.html',
  styleUrls: ['./secong-child-component.component.css']
})
export class SecongChildComponentComponent implements OnInit {

  @Input() sourceSubject : string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
