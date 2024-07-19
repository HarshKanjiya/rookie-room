import { Injectable } from '@angular/core';
import { ApiV1Service } from '../../shared/services/api.v1.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiV1Service) { }
}
