import { CRMBuilder } from './src/entities/builders/CRMBuilder';
import { EntityBuilder } from './src/entities/builders/EntityBuilder';
import { EntityListBuilder } from './src/entities/builders/EntityListBuilder';
import { Project } from './src/entities/products/project/Project';
import { ProjectList } from './src/entities/products/project/ProjectList';
import { ViewModeEnum } from './src/types/EntityList';
import { ProjectData } from './src/types/Project';

const fakeStore = {
  commit: (key: string, data: any) => console.log(key, data),
  get: (key: string) => key,
  dispatch: (key: string) => key,
};

const entityBuilder1 = new EntityBuilder(Project);
const entity1 = entityBuilder1
  .setData({ name: 'hello', id: 1, project_id: '2', locked: true })
  .addStore(fakeStore)
  .addPrintModule()
  .setDataSource({})
  .get();

const entityBuilder2 = new EntityBuilder(Project);
const entity2 = entityBuilder2.setData({ name: 'Brunno Lorenzoni', id: 2, project_id: '3', locked: false }).get();

const listBuilder = new EntityListBuilder(ProjectList);
const list = listBuilder.setItems([entity1, entity2]).get();

console.log(list.items.items[0].getName());

const crmBuilder = new CRMBuilder<Project>(entity2);
const crm = crmBuilder.get();

console.log(crm.entity.doExclusiveThing());
console.log(crm.doSomeCRMFunctionality());

crm.addResponsible(1234).then((result) => console.log('result', result));

console.log({
  entity: entity1,
  idKey: Project.idKey,
  name: entity1.getName(),
  id: entity1.getProjectId(),
  exclusive: entity1.doExclusiveThing(),
  data: entity1.getData(),
  typedGetValue: entity1.getValue<ProjectData>('project_id'),
  store: entity1.store?.get('hello'),
});

console.log({
  list,
  items: list.getItems().toArray(),
  listTypeId: list.listTypeId,
  state: list.state,
  search: list.getItems<Project>().findOne('id', 2),
  pagination: list.pagination.getCurrentPage(),
  viewMode: list.state.getViewMode(),
  names: list
    .getItems<Project>()
    .toArray()
    .map((item: Project) => item.getName()),
});
