import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    toggleMenu() {
        let nav = document.querySelector('nav');
        if (nav.classList.contains('responsive')) {
            nav.className = 'navbar';
        } else {
            nav.classList.add('responsive');
        }
    }
}
