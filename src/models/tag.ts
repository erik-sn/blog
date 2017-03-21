
interface ITagConstructor {
  id: number;
  name: string;
}

class Tag {
  public id: number;
  public name: string;

  constructor({ id, name }: ITagConstructor) {
    this.id = id;
    this.name = name;
  }
}

export default Tag;
