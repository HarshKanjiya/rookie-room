import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './confirmation.component.html',
})
export class ConfirmationComponent {

  closeModal() { }
}
