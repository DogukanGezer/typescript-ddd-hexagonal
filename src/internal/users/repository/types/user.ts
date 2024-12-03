
export class User {
    _id: string;
    name: string;
    email: string;

    constructor(_id: string, name: string, email: string) {
        this._id = _id;
        this.name = name;
        this.email = email;
    }
}

export class GetUserInput {
    _id: string;

    constructor(_id: string) {
        this._id = _id;
    }
}

export class SearchUserInput {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

export class CreateUserInput {
    name: string;
    email: string;
    password: string;

    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

export class UpdateUserInput {
    _id: string;
    name: string;
    email: string;

    constructor(_id: string, name: string, email: string) {
        this._id = _id;
        this.name = name;
        this.email = email;
    }
}

export class GetUserOutput {
    _id: string;
    name: string;
    email: string;

    constructor(_id: string, name: string, email: string) {
        this._id = _id;
        this.name = name;
        this.email = email;
    }
}

export class SearchUserOutput {
    users: User[];

    constructor(users: User[]) {
        this.users = users;
    }
}

export class CreateUserOutput {
    _id: string;

    constructor(_id: string) {
        this._id = _id;
    }
}

export class UpdateUserOutput {
    _id: string;

    constructor(_id: string) {
        this._id = _id;
    }
}