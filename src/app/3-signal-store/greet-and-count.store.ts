import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {interval} from 'rxjs';
import {patchState, signalStore, withComputed, withHooks, withMethods, withState} from '@ngrx/signals';
import {computed} from "@angular/core";

export const GreetAndCountStore = signalStore(
  withState({count: 0, greeting: "Hallo", name: "Welt"}),
  withComputed((state) => ({
    message: computed(() => `${state.greeting()}, ${state.name()}! Der Counter ist ${state.count()}.`),
  })),
  withMethods((store) => ({
    setName(name: string): void {
      patchState(store, {name});
    },
    increment(): void {
      patchState(store, (state) => ({count: state.count + 1}));
    },
    incrementTwice(): void {
      this.increment();
      this.increment();
    }
  })),
  withHooks({
    onInit(store) {
      interval(2_000)
        .pipe(takeUntilDestroyed())
        .subscribe(() => store.increment());
    },
    onDestroy(store) {
      console.log(`count on destroy ${store.count()}`);
    },
  })
  // Alternative syntax in case we want to inject a service

  // withHooks((store) => {
  //   const logger = inject(Logger);
  //   let interval = 0;
  //
  //   return {
  //     onInit() {
  //       interval = setInterval(() => store.increment(), 2_000);
  //     },
  //     onDestroy() {
  //       logger.info('count on destroy', store.count());
  //       clearInterval(interval);
  //     },
  //   };
  // }),
);
