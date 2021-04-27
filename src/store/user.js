import { makeObservable, observable, action,computed } from "mobx";

class User {
	constructor() {
		makeObservable(this, {
			user : observable,
		})
	}

	user = {
		name: 'name',
		city: 'city',
		birthday: 'date',
		avatar: 'avatar url'
	}
}

export const user = new User();