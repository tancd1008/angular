export type TypeLoginRequest = {
    email: string,
    password: string
  };
  
  export type TypeLoginResponse = {
    accessToken: string,
    user: {
      _id: string,
      name: string,
      email: string
    }
  };
  export type TypeSignUpRequest = {
    _id?: string,
    name: string,
    email: string,
    password: string,
    role: number,
    status: number
  };
  export type UserType = {
    _id:string,
    email:string,
    name:string,
    role:number,
    status:number
}
export type UserTypeUpdate = {
  _id?: string,
  name?: string,
  email?: string,
  password?: string,
  role?: number,
  status?: number
};