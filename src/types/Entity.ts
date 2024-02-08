import { ModuleComponent } from '../entities/modules';

export type EntityData = Record<string, any>;

export type EntityModules = {
  excel?: ModuleComponent;
  print?: ModuleComponent;
};
