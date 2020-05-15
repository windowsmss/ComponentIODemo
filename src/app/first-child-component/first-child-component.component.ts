import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-child-component',
  templateUrl: './first-child-component.component.html',
  styleUrls: ['./first-child-component.component.css']
})
export class FirstChildComponentComponent implements OnInit {

  newSubject: string;

  @Output() srcSubjectAdded = new EventEmitter<{srcSubjectName: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  updateReadingList(){
    console.log('Update the list ' + this.newSubject);
    this.srcSubjectAdded.emit({
      srcSubjectName: this.newSubject
    });

  }

}
