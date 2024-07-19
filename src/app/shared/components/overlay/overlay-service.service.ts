import { Injectable, signal } from '@angular/core';
import { NotificationTypes } from '../../interfaces/common.interface';
import { generateRandomString } from '../../common/common';
import { Subject, takeUntil, timer } from 'rxjs';

export interface INotification {
  type: NotificationTypes, message: string, id?: any
}

@Injectable({
  providedIn: 'root'
})

export class NotificationService {
  constructor() { }

  private readonly state = {
    $notifications: signal<INotification[]>([])
  }
  public readonly $notificationList = this.state.$notifications.asReadonly()

  public notify(data: INotification, duration: number = 4000) {
    let _notificationData = { ...data, id: generateRandomString(6, "number") }
    this.state.$notifications.update((x) => x.concat(_notificationData))
    const removeNotification$ = new Subject<void>();

    timer(duration).pipe(
      takeUntil(removeNotification$)
    ).subscribe(() => {
      this.hide(_notificationData.id);
      removeNotification$.next();
      removeNotification$.complete();
    });
  }

  public hide(id: string) {
    this.state.$notifications.update(_ => _.filter(n => n.id != id))
  }
}
