import { Component } from '@angular/core';
import { RxjsService } from '../../services/rxjs.service';
import { fromEvent, exhaustMap, switchMap, mergeMap, concatMap } from 'rxjs';

@Component({
  selector: 'app-rxjs-observables',
  imports: [],
  templateUrl: './rxjs-observables.component.html',
  styleUrl: './rxjs-observables.component.css'
})
export class RxjsObservablesComponent {


   constructor(private rxjsService: RxjsService) {}

  ngOnInit() {
    const button = document.getElementById('actionBtn')!;

    // Change operator here to test different behaviors
    fromEvent(button, 'click').pipe(
      // switchMap(click => this.rxjsService.fakeApiCall('switchMap'))
      // mergeMap(click => this.rxjsService.fakeApiCall('mergeMap'))
      // concatMap(click => this.rxjsService.fakeApiCall('concatMap'))
      exhaustMap(click => this.rxjsService.fakeApiCall('exhaustMap'))
    )
    .subscribe(res => console.log('Result:', res));
  }


//   switchMap → Only latest click is kept, older API calls canceled.

// mergeMap → Every click fires an API call, all run in parallel.

// concatMap → API calls queued → one after another in order.

// exhaustMap → First click runs, all others ignored until it finishes.
}



