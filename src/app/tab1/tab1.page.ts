import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  testForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.testForm = this.formBuilder.group({
      email: ['', Validators.email],
    });
  }

}
