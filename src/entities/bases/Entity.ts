import { EntityData, EntityModules } from '../../types/Entity';
import { PrintPage, ExportExcel, ModuleComponent } from '../modules';
import { Store } from './common/Store';

export abstract class Entity {
  static idKey: string = 'id';
  abstract data: EntityData | undefined;

  protected printUrl: string = '/printUrl';
  protected excelUrl: string = '/excelUrl';

  public id: number | undefined;

  public store: Store | undefined;
  public modules: EntityModules | undefined;
  public dataSource: any;

  public getData(): EntityData {
    return JSON.parse(JSON.stringify(this.data));
  }

  public setData(data: EntityData): void {
    this.data = data;
  }

  public getValue<T>(key: keyof T | string, def = null): any | null {
    const keyx = key as string;
    return this.data?.[keyx] ?? def;
  }

  public getName(): string | undefined {
    return this.data?.name || undefined;
  }

  public addModule(key: keyof EntityModules): void {
    if (!this.modules?.[key]) {
      this.modules = {
        [key]: undefined,
      };
    }

    switch (key) {
      case 'excel':
        this.modules.excel = new ExportExcel(this.excelUrl);
        break;
      case 'print':
        this.modules.print = new PrintPage([], this.printUrl);
        break;
    }
  }

  public getModule(key: keyof EntityModules): ModuleComponent | undefined {
    return this.modules?.[key];
  }

  public setStore(store: Store): void {
    this.store = store;
  }
}
