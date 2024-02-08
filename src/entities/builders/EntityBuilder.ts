import { Entity } from '../bases/Entity';
import { Store } from '../bases/common/Store';
import { EntityData } from '../../types/Entity';

export class EntityBuilder<T extends Entity> {
  private entity: T;

  constructor(entity: { new (): T }) {
    this.entity = new entity();
  }

  public setData(data: EntityData): this {
    this.entity.setData(data);
    this.entity.id = data.id;
    return this;
  }

  public setDataSource(dataSource: any): this {
    this.entity.dataSource = dataSource;
    return this;
  }

  public addExcelModule(): this {
    this.entity.addModule('excel');
    return this;
  }

  public addPrintModule(): this {
    this.entity.addModule('print');
    return this;
  }

  public addStore(store: any): this {
    this.entity.setStore(new Store(store));
    return this;
  }

  public get(): T {
    return this.entity;
  }
}
