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
  public created: number;
  public createdString: string;
  public expires: number;
  public expiresString: string;

  constructor({ access_token, expires_in, refresh_token, scope, token_type }: ITokenConstructor) {
    this.accessToken = access_token;
    this.expiresIn = expires_in;
    this.refreshToken = refresh_token;
    this.scope = scope;
    this.tokenType = token_type;
    this.created = Date.now();
    this.expires = this.created + expires_in;
    this.expiresString = new Date(this.expires).toString();
  }

  public duration(): number {
    return this.expires - Date.now();
  }

  public stringify(): string {
    return JSON.stringify({
      accessToken: this.accessToken,
      created: this.createdString,
      expires: this.expiresString,
      refreshToken: this.refreshToken,
      scope: this.scope,
      tokenType: this.tokenType,
    });
  }

}
