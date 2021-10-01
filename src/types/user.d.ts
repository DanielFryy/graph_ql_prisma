interface CreateUser {
  name: string;
  email: string;
  acceptTermsAndConditions: boolean;
}

interface UpdateUser {
  id: number;
  name: string;
  email: string;
}
