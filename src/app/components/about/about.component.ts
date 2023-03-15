import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  studentID = 'S00211783'
  studentName = 'Matthew Blain'
  projectDescription= 'CA3 - Movie Finder'

  constructor() { }

  ngOnInit(): void {
  }

}
