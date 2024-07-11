import { Injectable, signal, Signal } from '@angular/core';
import { NotificationTypes } from '../../interfaces/common';

interface INotificationService {
  show: Signal<boolean>
  notify: (type: NotificationTypes, message: string, notificationId?: number) => void
  hide: (notificationId: number) => void
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService implements INotificationService {

  constructor() { }

  public show: Signal<boolean> = signal(false)

  public notify(type: NotificationTypes, message: string) {
  }

  public hide(notificationId: number) {
  }
}
