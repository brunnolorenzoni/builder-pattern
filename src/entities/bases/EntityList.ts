import { Entity } from './Entity';
import { EntityListPagination } from './EntityList/EntityListPagination';
import { EntityListState } from './EntityList/EntityListState';
import Collection from './common/Collection';

export abstract class EntityList {
  static idKey = 'id';
  abstract listTypeId: number;
  abstract items: Collection<any>;

  public state: EntityListState = new EntityListState();
  public pagination: EntityListPagination = new EntityListPagination();

  public getItems<T>(): Collection<T> {
    return this.items;
  }

  public setItems<T>(items: T[]): void {
    this.items = new Collection(items);
  }
}
