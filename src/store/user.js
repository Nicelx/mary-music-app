import { makeObservable, observable, action,computed } from "mobx";

class User {
	constructor() {
		makeObservable(this, {
			user : observable,
			setUserId : action,
		})
	}

	user = {
		id : null,
		name: 'name',
		city: 'city',
		birthday: 'date',
		avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQceBV9lla57T_I9ajBeJ5P9gJ6nNe1D1M4RQ&usqp=CAU'
	}
	get getUser() {
		return this.user
	}
	setUserId(userId) {
		user.id = userId;
	}
}

export const user = new User();