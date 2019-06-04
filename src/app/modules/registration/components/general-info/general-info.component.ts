import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ApiService} from '../../../../core/service/api.service';
import {User} from '../../model/user'
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.sass']
})
export class GeneralInfoComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: [''],
          lastName: [''],
          creditCard: [''],
          mailingAddress: [''],
          shippingAddress: ['']
      });
    this.getUserInfo();
  }

  getUserInfo() {
    this.apiService.getData(environment.baseURL+'user')
    .subscribe((user: User) => {
      this.registerForm.setValue({
        firstName: user.firstName,
        lastName: user.lastName,
        creditCard: user.creditCard,
        mailingAddress: user.mailingAddress,
        shippingAddress: user.shippingAddress
      });
    },
    err => {
        console.log(err);
    });
  }

  shippingAddressChange(values:any){
    if(values.currentTarget.checked){
        this.registerForm.patchValue({
          shippingAddress: this.registerForm.get('mailingAddress').value
      });
    }
  }

  onSubmit() {
    alert('SUCCESS!!');
  }
}
