import {patchState, signalStore, withComputed, withMethods, withState,} from "@ngrx/signals";
import {computed} from "@angular/core";
import {debounceTime, delay, distinctUntilChanged, map, Observable, of, pipe, switchMap, tap} from "rxjs";
import {rxMethod} from "@ngrx/signals/rxjs-interop";
import {tapResponse} from "@ngrx/component-store";

type Book = { id: string; title: string; author: string; }
export type BooksState = { books: Book[]; isLoading: boolean; filter: { query: string; order: 'asc' | 'desc' }; };

export const BooksStore = signalStore(
  withState<BooksState>({books: [], isLoading: false, filter: {query: '', order: 'asc'}}),
  withComputed(({books, filter}) => ({
      booksCount: computed(() => books().length),
      sortedBooks: computed(() => {
        const direction = filter.order() === 'asc' ? 1 : -1;

        return books().toSorted((a, b) =>
          direction * a.title.localeCompare(b.title)
        );
      })
    })
  ),
  withMethods((store) => ({
    updateQuery(query: string): void {
      patchState(store, (state) => ({filter: {...state.filter, query}}));
    },
    updateOrder(order: 'asc' | 'desc'): void {
      patchState(store, (state) => ({filter: {...state.filter, order}}));
    },
    toggleOrder(): void {
      this.updateOrder(store.filter.order() === 'asc' ? 'desc' : 'asc')
    },
    loadByQuery: rxMethod<string>(
      pipe(
        tap((query) => console.log('searching for', query)),
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => patchState(store, {isLoading: true})),
        switchMap((query) => {
          return searchBooks(query).pipe(
            tapResponse({
              next: (books) => patchState(store, {books}),
              error: console.error,
              finalize: () => patchState(store, {isLoading: false}),
            })
          );
        })
      )
    ),
  })),
);


function searchBooks(query: string): Observable<Book[]> {
  //Replace with real API call
  const sampleBooks = [
    {id: "9780061122415", title: 'To Kill a Mockingbird', author: 'Harper Lee',},
    {id: "9780743273565", title: 'The Great Gatsby', author: 'F. Scott Fitzgerald',},
    {id: "9781984801814", title: 'Becoming', author: 'Michelle Obama',}
  ];
  return of(sampleBooks).pipe(
    map(books => books.filter(book => book.title.includes(query))),
    delay(2000));
}


/* We can alternatively provide the store globally (not needed to name in provides:[] in each component)
export const GlobalBooksStore = signalStore(
  {providedIn: 'root'},
  withState(...)
    // ... same as below
);
*/
