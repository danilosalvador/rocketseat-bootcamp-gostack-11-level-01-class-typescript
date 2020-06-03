
interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name: string;
  email: string;
  password?: string;
  techs: Array<string | TechObject>
}

export default function createUser({ name, email, techs }: CreateUserData) {
  const user = {
    name,
    email,
    techs
  }

  return user;
}