export type TypeLoginRequest = {
    email: string,
    password: string
  };
  
  export type TypeLoginResponse = {
    accessToken: string,
    user: {
      id: number,
      email: string
    }
  };