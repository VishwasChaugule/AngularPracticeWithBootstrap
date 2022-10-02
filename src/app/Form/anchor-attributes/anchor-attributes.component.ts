import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anchor-attributes',
  templateUrl: './anchor-attributes.component.html',
  styleUrls: ['./anchor-attributes.component.css']
})
export class AnchorAttributesComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navigateToInputType() {
    this.route.navigate(['/inputtypes']);
  }

}
