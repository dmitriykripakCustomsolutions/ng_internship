import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, FormControl, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  promotionApplicationFrom: FormGroup;
  promotionApplication: PromotionApplication;

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) {
    this.buildForm();
    this.populateForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    this.promotionApplicationFrom = this.formBuilder.group({
      firstName: ['', { validators: this.validateName, updateOn: 'blur' }],
      lastName: ['', Validators.required],
      address: new FormGroup({
        city: new FormControl('', [Validators.required]),
        district: new FormControl('', [Validators.required]),
        zipCode: new FormControl('', [Validators.required])
      }),
      position: ['', Validators.required],
      salary: ['', Validators.required],
      reason: new FormArray([])
    }
    );
  }

  public get reasons(): FormArray {
    return this.promotionApplicationFrom.get('reason') as FormArray;
  }

  addReason() {
    let control = new FormControl('', [Validators.required]);
    this.reasons.push(control);
  }

  private populateForm() {
    this.promotionApplication = JSON.parse(localStorage.getItem('promotionApplication'));

    if (this.promotionApplication) {
      this.promotionApplication.reason.forEach(reason => {
        this.addReason();
      });
      this.promotionApplicationFrom.setValue(this.promotionApplication);
    } 
  }

  public clearData() {
    localStorage.clear();
    this.promotionApplicationFrom.reset();
  }

  public onSubmit() {
    this.promotionApplication = this.promotionApplicationFrom.value;

    localStorage.setItem('promotionApplication', JSON.stringify(this.promotionApplication));
  }

  public isControlInvalid(controlName: string): boolean {
    let control = this.promotionApplicationFrom.get(controlName);

    return !control.valid;
  }

  public isErrorExist(controlName: string, errorType: string) {
    let control = this.promotionApplicationFrom.get(controlName);

    if (control) {
      return control.errors[errorType];
    }

    return false;
  }

  public validateName(control: AbstractControl): ValidationErrors {
    if (control.value === 'COM9') {
      return { invalidValue: true };
    }

    return null;
  }

}


export class PromotionApplication {
  firstName: string;
  lastName: string;
  address: OfficeAddress;
  position: string;
  salary: number;
  reason: Array<string>;
}

export class OfficeAddress {
  city: string;
  district: string;
  zipCode: string;
}
