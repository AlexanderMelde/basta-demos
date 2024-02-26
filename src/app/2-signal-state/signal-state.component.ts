import {ChangeDetectionStrategy, Component} from '@angular/core';
import {patchState, signalState} from "@ngrx/signals";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-signal-state',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './signal-state.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalStateComponent {
  protected state = signalState({greeting: "Hallo", name: "Welt"})
  protected readonly patchState = patchState;
}
