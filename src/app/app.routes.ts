import {Routes} from '@angular/router';
import {SignalStateComponent} from "./2-signal-state/signal-state.component";
import {SignalsComponent} from "./1-signals/signals.component";
import {SignalStoreComponent} from "./3-signal-store/signal-store.component";
import {BookStoreComponent} from "./4-book-store/book-store.component";

export const routes: Routes = [
  {path: 'signals', component: SignalsComponent},
  {path: 'signal-state', component: SignalStateComponent},
  {path: 'signal-store', component: SignalStoreComponent},
  {path: 'book-store', component: BookStoreComponent},
];
