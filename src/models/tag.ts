
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

  public stringify(): string {
    return JSON.stringify({
      id: this.id,
      name: this.name,
    });
  }
}

export default Tag;
