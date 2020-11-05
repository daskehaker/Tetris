export class User {
  constructor(
    public name:string,
    public password: string
  ){}
}

export class NewUser {
  constructor(
    public name:string,
    public password: string,
    public password2: string
  ){}
}
