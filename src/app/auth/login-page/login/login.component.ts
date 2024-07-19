import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, LucideAngularModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  id: any;
  onTextKeyUp() {
    throw new Error('Method not implemented.');
  }
  password: any;
  passwordVisiblity: any;
  setPasswordVisiblity() {
    throw new Error('Method not implemented.');
  }
  AllowSubmit: any;
  loading: boolean = false;
  submit() {
    throw new Error('Method not implemented.');
  }
  onFormChange(arg0: string) {
    throw new Error('Method not implemented.');
  }

}
