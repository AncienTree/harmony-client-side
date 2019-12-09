import { Resource } from './resource';

export class Users extends Resource {
  login: string;
  status: boolean;
  role: string;
  password?: string;
}
