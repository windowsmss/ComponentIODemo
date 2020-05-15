import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  subjectsIWantToLearn : string [] = ["Angular", "Spring", "Spring Boot"];

  constructor() { }

  ngOnInit(): void {
  }

  pushSourceSubject(newSubjectData: {srcSubjectName: string}){
    this.subjectsIWantToLearn.push(newSubjectData.srcSubjectName);
  }
}
