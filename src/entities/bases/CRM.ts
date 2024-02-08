import { Entity } from './Entity';

export class CRM<T extends Entity> {
  public entity: T;

  constructor(entity: T) {
    this.entity = entity;
  }

  doSomeCRMFunctionality(): string {
    return "I'm a CRM";
  }

  getMapData() {
    return {
      id: this.entity.getValue('id'),
      title: this.entity.getName(),
    };
  }

  async addResponsible(userId: number): Promise<number> {
    return new Promise((resolve) => {
      return resolve(userId);
    });
  }

  isLocked() {
    return !!this.entity.getValue<T>('locked');
  }
}
