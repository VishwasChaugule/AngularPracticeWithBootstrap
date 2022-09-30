import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  name = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  onChange(input: any) {
    console.log(this.name.value);
  }
}
