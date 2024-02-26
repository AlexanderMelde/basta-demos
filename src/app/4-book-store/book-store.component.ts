import {ChangeDetectionStrategy, Component, effect, inject, OnInit} from '@angular/core';
import {BooksState, BooksStore} from "./books.store";
import {getState} from "@ngrx/signals";
import {JsonPipe} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [JsonPipe, FormsModule],
  providers: [BooksStore],
  templateUrl: './book-store.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookStoreComponent implements OnInit {
  readonly store = inject(BooksStore);

  /* Global Alternative:
   readonly globalStore = inject(GlobalBooksStore);
   */

  constructor() {
    effect(() => {
      // Computed signals and methods will not be included.
      // Custom type is not yet properly shown here without explicit <>
      const state = getState<BooksState>(this.store);
      console.log('books state changed', state);
    });
  }

  // this is an alternative to withHooks
  ngOnInit(): void {
    const query = this.store.filter.query;

    /* Explanation
    * passing the signal will automatically use string internally but keep invocating the method (pipe) on every change
    * use query() to only run it once
    * */
    this.store.loadByQuery(query);
  }


}
