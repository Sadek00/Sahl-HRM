import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, 
      CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, 
      FormControlDirective, ButtonDirective, NgStyle, RouterLink, ReactiveFormsModule]
})
export class LoginComponent {

  public loginForm!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.buildLoginForm();
  }
  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required]],
      
    });
  }
  login(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe(
        (response) => {
          console.log(response);
        }
      );
    }
  }
}
