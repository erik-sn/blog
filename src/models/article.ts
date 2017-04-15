import * as moment from 'moment';
import Tag from './tag';

interface IArticleConstructor {
  published?: boolean;
  id: number;
  title: string;
  description: string;
  date: string;
  text: string;
  tags: Tag[];
}

class Article {

  public published: boolean = false;
  public id: number;
  public title: string;
  // tslint:disable-next-line:variable-name
  public url_title: string;
  public description: string;
  public text: string;
  public date: moment.Moment;
  public timeToRead: number;
  public tags: Tag[];
  private dateString: string;

  constructor({ id, title, description, date, text, tags, published }: IArticleConstructor) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.tags = tags.map((tag) => new Tag(tag));
    this.text = text;
    this.timeToRead = Math.ceil(text.split(' ').length / 200);
    this.dateString = date;
    this.date = moment(date);
    this.url_title = this.formatForUrl(title);
    if (published !== undefined) {
      this.published = published;
    }
  }

  public clone(): this {
    return new (this.constructor as typeof Article)({
      published: this.published,
      date: this.dateString,
      description: this.description,
      id: this.id,
      tags: this.tags,
      text: this.text,
      title: this.title,
    }) as this;
  }

  public stringify(): any {
    const objectData = {
      published: this.published,
      date: this.dateString,
      description: this.description,
      id: this.id,
      tags: this.tags.map((tag) => ({ id: tag.id, name: tag.name })),
      text: this.text,
      title: this.title,
    };
    return JSON.stringify(objectData);
  }

  public tagsToIds(): number[] {
    return this.tags.map((tag) => tag.id);
  }

  private formatForUrl(title: string): string {
    const removeSpaces = title.toLowerCase().replace(/ /g, '-');
    return removeSpaces.replace(/[^0-9a-zA-Z\-]+/g, '');
  }
}

export default Article;
