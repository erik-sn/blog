
interface IUserProps {
  id: number;
  username: string;
  email: string;
  is_staff: boolean;
  is_superuser: boolean;
  is_active: boolean;
}

export default class User {

  public id: number;
  public isStaff: boolean;
  public isSuperuser: boolean;
  public isActive: boolean;
  public email: string;
  public username: string;

  constructor({ id, username, email, is_staff, is_superuser, is_active }: IUserProps) {
    this.id = id;
    this.isStaff = is_staff;
    this.isSuperuser = is_superuser;
    this.isActive = is_active;
    this.email = email;
    this.username = username;
  }

}
