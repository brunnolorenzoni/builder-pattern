import { EntityList } from '../bases/EntityList';

export class EntityListBuilder<T extends EntityList> {
  private entityList: T;

  constructor(entityList: { new (): T }) {
    this.entityList = new entityList();
  }

  public setItems<I>(items: I[]): this {
    this.entityList.setItems<I>(items);

    return this;
  }

  public get(): T {
    return this.entityList;
  }
}
