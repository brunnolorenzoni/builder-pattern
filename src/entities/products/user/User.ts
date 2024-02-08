import { Entity } from '../../bases/Entity';
import { UserData } from '../../types/User';

export class User extends Entity {
	protected data: UserData;

	doExclusiveThing(): string {
		return 'I do something exclusive in User Class';
	}
}
