import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  constructor(private router:Router ) { }

  viewProjects(){
    this.router.navigateByUrl("/projects")
  }
  viewStudies(){
    this.router.navigateByUrl("/studies")
  }
  viewSkills(){
    this.router.navigateByUrl("/avatar-home")
  }

  ngOnInit() {
  }

}
