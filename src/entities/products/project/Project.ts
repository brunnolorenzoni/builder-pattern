import { Entity } from '../../bases/Entity';
import { ProjectData } from '../../../types/Project';

export class Project extends Entity {
  static idKey: string = 'project_id';

  public data: Partial<ProjectData>;

  doExclusiveThing(): string {
    return 'I do something exclusive in Project Class';
  }

  getProjectId(): string {
    return this.data?.project_id || '';
  }

  override getName(): string {
    return this.data?.name ? `Project: ${this.data.name}` : '';
  }
}
