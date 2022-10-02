import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-list',
  templateUrl: './input-list.component.html',
  styleUrls: ['./input-list.component.css']
})
export class InputListComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navigateByUrlAnchor() {
    this.route.navigateByUrl('/anchor');
  }

}
