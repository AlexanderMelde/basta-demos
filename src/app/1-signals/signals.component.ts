import {ChangeDetectionStrategy, Component, computed, effect, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './signals.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsComponent {

  protected varA = signal(3);
  protected varB = signal(8);

  protected aPlusB = computed(() => this.varA() + this.varB());

  constructor() {
    effect(() => {
      console.log(`C has changed to ${this.aPlusB()}`);
      if (this.aPlusB() >= 15) {
        console.log("C has reached its maximum. Resetting A to 0");
        // This will throw an exception only at runtime
        this.varA.set(0);
      }
    });
  }

  updateB1() {
    // how often will effect() be called?
    this.varB.set(9);
    this.varB.set(10);
  }

  updateB2() {
    setTimeout(() => this.varB.set(11), 1000);
    this.varB.set(12);
  }
}
