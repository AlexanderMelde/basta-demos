import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {patchState, signalStore, withMethods} from "@ngrx/signals";
import {addEntities, addEntity, updateEntity, withEntities} from "@ngrx/signals/entities";

interface Task {
  id: number;
  name: string;
  finished: boolean;
}

@Component({
  selector: 'app-extensions',
  standalone: true,
  imports: [],
  templateUrl: './extensions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtensionsComponent implements OnInit {
  private TasksStore = signalStore(
    // this will add three properties to the store: ids, entities, and entityMap
    withEntities<Task>(),
    withMethods((store) => ({
      toggleFinished(id: number): void {
        const currentStatus = store.entityMap()[id].finished;
        patchState(store, updateEntity({id, changes: {finished: !currentStatus}}));
      }
    }))
  );
  protected tasksStore = new this.TasksStore();

  // this will add nine properties to the store: taskIds, taskEntities, taskEntityMap, userIds, ...
  // const BigStore = signalStore(
  //   withEntities({ entity: type<Task>(), collection: 'task' }),
  //   withEntities({ entity: type<User>(), collection: 'user' }),
  //   withEntities({ entity: type<Category>(), collection: 'category' })
  // );

  ngOnInit() {
    patchState(this.tasksStore, addEntity(
      {id: 1, name: 'Tidying Clothes', finished: false}
    ));

    patchState(this.tasksStore, addEntities([
      {id: 2, name: 'Car Washing', finished: false},
      {id: 3, name: 'Room Cleaning', finished: false},
    ]));
  }

}
