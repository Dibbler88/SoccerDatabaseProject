import { Component, OnInit } from '@angular/core';
import { Tracing } from 'trace_events';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  public teamname: string;
  public teamimagepath: string;

  constructor(teamname: string, teamimagepath: string) {
     this.teamname = teamname;
     this.teamimagepath = teamimagepath;
   }

  ngOnInit(): void {
  }

}


