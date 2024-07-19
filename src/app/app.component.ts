import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationComponent } from "./shared/components/overlay/notification/notification.component";
import { SharedService } from './shared/services/shared.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rookie-room';
  constructor(private sharedService: SharedService) { }
  @HostBinding("class.dark") get mode() {
    return this.sharedService.$theme
  }
}
