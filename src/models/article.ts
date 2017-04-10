import * as moment from 'moment';
import Tag from './tag';

interface IArticleConstructor {
  active?: boolean;
  id: number;
  title: string;
  description: string;
  date: string;
  text: string;
  tags: Tag[];
}

class Article {

  public active: boolean = true;
  public id: number;
  public title: string;
  public urlTitle: string;
  public description: string;
  public text: string;
  public date: moment.Moment;
  public timeToRead: number;
  public tags: Tag[];
  private dateString: string;

  constructor({ id, title, description, date, text, tags, active }: IArticleConstructor) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.tags = tags.map((tag) => new Tag(tag));
    this.text = text;
    this.timeToRead = Math.ceil(text.split(' ').length / 200);
    this.dateString = date;
    this.date = moment(date);
    this.urlTitle = this.formatForUrl(title);
    if (active !== undefined) {
      this.active = active;
    }
  }

  public clone(): this {
    return new (this.constructor as typeof Article)({
      active: this.active,
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
      active: this.active,
      date: this.dateString,
      description: this.description,
      id: this.id,
      tags: this.tags.map((tag) => tag.name),
      text: this.text,
      title: this.title,
    };
    return JSON.stringify(objectData);
  }

  private formatForUrl(title: string): string {
    const removeSpaces = title.toLowerCase().replace(/ /g, '-');
    return removeSpaces.replace(/[^0-9a-zA-Z\-]+/g, '');
  }

}

export default Article;
