export type UserData = {
  id: number;
  firstName: string,
  lastName: string,
  email: string,
};

export type UserResponse = {
  token: string;
  data: {
    id: number;
    firstName: string,
    lastName: string,
    email: string,
  }
}
