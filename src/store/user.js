import { makeObservable, observable, action,computed } from "mobx";

class User {
	constructor() {
		makeObservable(this, {
			user : observable,
			getUser: computed
		})
	}

	user = {
		name: 'name',
		city: 'city',
		birthday: 'date',
		avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQceBV9lla57T_I9ajBeJ5P9gJ6nNe1D1M4RQ&usqp=CAU'
	}
	get getUser() {
		return this.user
	}
}

export const user = new User();