export * from './ExportExcel';
export * from './PrintPage';

export interface ModuleComponent {
	execute(): Promise<void>;
}
