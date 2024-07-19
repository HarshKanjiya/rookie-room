import { Component, computed, Signal } from '@angular/core';
import { INotification, NotificationService } from '../overlay-service.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  animations: [
    trigger('anim', [
      state('void', style({ opacity: 0, transform: 'translateX(100%)' })),
      state('*', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => *', [
        animate('0.5s ease-out')
      ]),
      transition('* => void', [
        animate('0.5s ease-in', style({ opacity: 0, transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class NotificationComponent {
  data: Signal<INotification[]> = computed(() => this.notifService.$notificationList())
  constructor(private notifService: NotificationService) { }
}
