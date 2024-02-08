import { ModuleComponent } from '.';
export class PrintPage implements ModuleComponent {
  constructor(private router: Array<{ path: string }>, private path: string) {}

  async execute(): Promise<void> {
    await this.router.push({
      path: this.path,
    });
    console.log('Go to page', this.router);
  }
}
