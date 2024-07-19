import { computed, Injectable, signal } from '@angular/core';
import { IUser } from '../interfaces/shared.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private readonly state = {
    $users: signal<IUser[]>([]),
    $loading: signal<boolean>(false),
    $success: signal<boolean>(false),
    $error: signal<string | null>(null),
    $theme: signal<'LIGHT' | 'DARK'>('LIGHT')
  }

  public readonly $loading = this.state.$loading.asReadonly();
  public readonly $success = this.state.$success.asReadonly();
  public readonly $error = this.state.$error.asReadonly();
  public readonly $users = this.state.$users.asReadonly();
  public readonly $theme = this.state.$theme.asReadonly();
  public readonly $currentUser = computed(() => this.state.$users().filter(_ => _.isActive))

  setLoading(loading: boolean) {
    this.state.$loading.set(!!loading)
  }

  setSuccess(loading: boolean) {
    this.state.$success.set(!!loading)
  }

  setError(error: string) {
    this.state.$error.set(error)
  }

  setLoggedInUser(user: IUser) {
    this.state.$users.update(_ => _.concat(user))
  }

  logOutCurrent() {
    this.state.$users.update(_ => _.filter(user => !user.isActive))
  }

  logOutAll() {
    this.state.$users.set([])
  }

  setTheme(theme: 'LIGHT' | 'DARK') {
    this.state.$theme.set(theme)
  }
}
