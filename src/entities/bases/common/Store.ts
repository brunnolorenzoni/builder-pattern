export class Store {
	constructor(private store: any) {}

	commit(key: string, data: any): void {
		this.store.commit(key, {
			...data,
		});
	}

	get(key: string): unknown | undefined {
		return this.store.get(key);
	}

	dispatch(key: string): void {
		this.store.dispatch(key);
	}
}
