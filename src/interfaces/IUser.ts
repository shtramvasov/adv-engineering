export enum IRole {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export interface IUser {
  user: string
  password: string
  name: string | undefined
  role: IRole
}