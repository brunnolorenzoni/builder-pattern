import { ViewModeEnum } from '../../../types/EntityList';

export class EntityListState {
  protected viewMode: string = ViewModeEnum.TABLE;

  getViewMode(): string {
    return this.viewMode;
  }

  setViewMode(viewMode: ViewModeEnum) {
    this.viewMode = viewMode;
  }
}
