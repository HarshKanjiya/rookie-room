import { Component } from '@angular/core';
import { ResetPasswordComponent } from "./reset-password/reset-password.component";

@Component({
  selector: 'app-reset-pass-page',
  standalone: true,
  imports: [ResetPasswordComponent],
  templateUrl: './reset-pass-page.component.html',
  styleUrl: './reset-pass-page.component.scss'
})
export class ResetPassPageComponent {

}
