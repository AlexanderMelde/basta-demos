import {ChangeDetectionStrategy, Component} from '@angular/core';
import {patchState, signalStore, withMethods, withState} from "@ngrx/signals";
import {setLoaded, setLoading, withCallState} from "./call-state.util";

interface Task {
  id: number;
  name: string;
  finished: boolean;
}

@Component({
  selector: 'app-custom-extension',
  standalone: true,
  imports: [],
  templateUrl: './custom-extension.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomExtensionComponent {
  private Store = signalStore(
    withState({data: 'test'}),
    withCallState(),
    withMethods((store) => ({
      async loadNewData(): Promise<void> {
        patchState(store, setLoading())
        await new Promise(resolve => setTimeout(resolve, 1500))
        patchState(store, {data: 'new data'})
        patchState(store, setLoaded())
      }
    }))
  );

  protected store = new this.Store();
}
