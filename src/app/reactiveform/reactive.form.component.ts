import { Component, inject } from "@angular/core";
import { ReactiveFormsModule, FormControl, Validators, FormGroup, FormBuilder, FormArray, FormsModule, NgForm } from "@angular/forms"
import { CommonModule } from "@angular/common";


@Component({
    selector: 'app-form',
    templateUrl: './reactive.form.component.html',
    imports: [ReactiveFormsModule, CommonModule, FormsModule],
    styles: `
    .invalid-feedback{
        display: block !important;
    }
    `
})

export class ReactiveFormComponent {

    fb = inject(FormBuilder);

    //multi field with formgroup
    personalForm: FormGroup = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
    });

    //multi field with formbuilder
    personalFormfb: FormGroup = this.fb.group(
        {
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
        }
    )

    //single field without formgroup
    firstName = new FormControl('', Validators.required);
    lastName = new FormControl('', Validators.required);
    email = new FormControl('', [Validators.required, Validators.email]);

    //multiple field using formarray concept
    arrayForm: FormGroup = this.fb.group({
        firstName: ['', [Validators.required]],
        hobbies: this.fb.array([this.createHobiesControl()])
    })

    personalModel = {
        firstName: '',
        lastName: '',
        email: ''
    }

    //Template Driven approach
    get hobbies() {
        const hobbies = this.arrayForm.get('hobbies') as FormArray;
        return hobbies
    }

    addHobbies() {
        this.hobbies.push(this.createHobiesControl())
    }

    createHobiesControl() {
        return this.fb.group({
            name: ['', [Validators.required]],
            desc: ['']
        })
    }

    submitForm() {
        if (this.firstName.valid && this.lastName.valid && this.email.valid) {
            console.log('Valid Forms')
        } else {
            console.log('Invalid Forms');
            this.firstName.markAsTouched();
            this.lastName.markAsTouched();
            this.email.markAsTouched();
        }
    }

    submitPersonalForm() {
        if (this.personalForm.valid) {
            console.log(this.personalForm)
        } else {
            this.personalForm.markAllAsTouched();
        }
    }

    submitPersonalForm1() {
        if (this.personalFormfb.valid) {
            console.log(this.personalFormfb)
        } else {
            this.personalFormfb.markAllAsTouched();
        }
    }

    resetForm() {
        this.personalForm.reset();
    }

    submitArrayForm() {
        if (this.arrayForm.valid) {
        }
        else {
            this.arrayForm.markAllAsTouched()
        }
    }

    submitPersonalInfoForm(personalForm: NgForm) {
        debugger;
        if (personalForm.valid) {
            debugger;
        } else {
            personalForm.form.markAllAsTouched();
        }
    }


}