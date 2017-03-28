import * as moment from 'moment';

interface ITokenConstructor {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}

export default class Token {

  public accessToken: string;
  public expiresIn: number;
  public refreshToken: string;
  public scope: string;
  public tokenType: string;
  public created: moment.Moment;
  public createdString: string;

  constructor({ access_token, expires_in, refresh_token, scope, token_type }: ITokenConstructor) {
    this.accessToken = access_token;
    this.expiresIn = expires_in;
    this.refreshToken = refresh_token;
    this.scope = scope;
    this.tokenType = token_type;
    this.created = moment();
    this.createdString = this.created.format('YYYY-MM-DDTHH:MM:SS');
  }

  public duration(): number {
    return this.expiresIn - moment().diff(this.created, 'seconds');
  }

  public stringify(): string {
    return JSON.stringify({
      accessToken: this.accessToken,
      created: this.createdString,
      expiresIn: this.expiresIn,
      refreshToken: this.refreshToken,
      scope: this.scope,
      tokenType: this.tokenType,
    });
  }

}
