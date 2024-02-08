class User {
	private name: string;
	private email: string;
	private age: number;
	private phone: string;

	getName(): string {
		return this.name;
	}
	setName(value: string) {
		this.name = value;
	}

	getEmail(): string {
		return this.email;
	}
	setEmail(value: string) {
		this.email = value;
	}

	getAge(): number {
		return this.age;
	}
	setAge(value: number) {
		this.age = value;
	}

	getPhone(): string {
		return this.phone;
	}
	setPhone(value: string) {
		this.phone = value;
	}
}

class UserBuilder {
	private user: User;

	constructor() {
		this.user = new User();
	}

	static builder() {
		return new UserBuilder();
	}

	setBasicInformation(name: string, email: string) {
		this.user.setName(name);
		this.user.setEmail(email);

		return this;
	}

	setAge(age: number) {
		this.user.setAge(age);

		return this;
	}

	setPhone(phone: string) {
		this.user.setPhone(phone);

		return this;
	}

	build() {
		return this.user;
	}
}

const user = UserBuilder.builder()
	.setBasicInformation('John Doe', 'test@example.com')
	.setAge(30)
	.setPhone(`40028922`)
	.build();

console.log(user);
