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
    name: string,
    email: string,
    password: string,
    role: number
  };