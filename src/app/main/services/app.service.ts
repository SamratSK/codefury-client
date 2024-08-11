import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public readonly HERE_API_KEY = 'FrPizsHj5uKhMYi6kNfxgioAtQodgMCS4R770VpNJhY';

  public dataLoaded = new BehaviorSubject<boolean>(false);

  public updateDataLoaded() {
    
    this.dataLoaded.next(true);
    console.log('new check');

  }
}
