import { ModuleComponent } from '.';
export class ExportExcel implements ModuleComponent {
  constructor(private path: string) {}

  async loadFile(): Promise<void> {
    await new Promise((resolve) => {
      console.log('File downloaded on path', this.path);
      resolve(true);
    });
  }

  async execute(): Promise<void> {
    await this.loadFile();
  }
}
