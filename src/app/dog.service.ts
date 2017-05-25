import { Injectable } from '@angular/core';
import { DOGS } from './dogs-data';
import { Dog } from './dog';

@Injectable()
export class DogService {
  getDogs(): Promise<Dog[]> {
    return Promise.resolve(DOGS);
  }
  constructor() { }
}
