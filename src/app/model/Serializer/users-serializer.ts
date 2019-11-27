import { Users } from '../users';
import { Serializer } from './serializer';

export class UsersSerializer implements Serializer {
  fromJson(json: any): Users {
    const users = new Users();
    users.id = json.id;
    users.login = json.login;
    users.status = json.status;
    users.role = json.role;
    return users;
  }

  toJson(users: Users): any {
    return {
      id: users.id,
      login: users.login,
      status: users.status,
      role: users.role,
    };
  }
}
