import { EntityList } from '../../bases/EntityList';
import Collection from '../../bases/common/Collection';
import { Project } from './Project';

export class ProjectList extends EntityList {
  listTypeId: number = 1;
  public items: Collection<Project>;
}
