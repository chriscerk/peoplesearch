export interface IPerson {
    id: string;
    firstName: string;
    lastName: string;
    userName: string;
    phoneNumber: string;
    picturePath: string;
}


export interface IUser {
    gender: string;
    name: IName;
    location: ILocation;
    email: string;
    login: ILogin;
    dob: string;
    registered: string;
    phone: string;
    cell: string;
    id: IIdentification;
    picture: IPicture;
    nat: string;
}

export interface IRandomUsersResponse {
    results: IUser[];
    info: IUserInfo;
}

export interface IName {
    title: string;
    first: string;
    last: string;
}

export interface ILocation {
    street: string;
    city: string;
    state: string;
    postcode: number;
}

export interface IPicture {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface ILogin {
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export interface IIdentification {
    name: string;
    value: string;
}

export interface IUserInfo {
    seed: string;
    results: number;
    page: number;
    version: string;
}