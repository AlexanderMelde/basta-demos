import {ChangeDetectionStrategy, Component, effect, inject} from '@angular/core';
import {getState} from "@ngrx/signals";
import {GreetAndCountStore} from "./greet-and-count.store";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './signal-store.component.html',
  providers: [GreetAndCountStore],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalStoreComponent {
  readonly store = inject(GreetAndCountStore);

  constructor() {
    effect(() => {
      const state = getState(this.store);
      console.log('counter store state changed', state);
    });
  }

}
