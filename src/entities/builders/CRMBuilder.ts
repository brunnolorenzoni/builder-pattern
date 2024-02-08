import { CRM } from '../bases/CRM';
import { Entity } from '../bases/Entity';

export class CRMBuilder<T extends Entity> {
  private crm: CRM<T>;

  constructor(entity: T) {
    this.crm = new CRM(entity);
  }

  public get(): CRM<T> {
    return this.crm;
  }
}
