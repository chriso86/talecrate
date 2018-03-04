import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  user = {
    activities: [
      {
        activityType: 'AddedCharacter',
        story: 'North World',
        description: 'Added new Character',
        value: 'Jack Adams',
        activityDate: new Date()
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  getActivityIcon(activityType: string) {
    if(activityType === 'AddedCharacter') {
      return 'user plus';
    }
  }

}
