
import * as axios from 'axios';
import * as cookie from 'js-cookie';
import * as React from 'react';

import { fetchArticles, login, logout, refresh } from '../../actions/';
import { IAction, IReduxState } from '../../constants/interfaces';
import { API } from '../../constants/types';
import connect from '../../utils/connect';
import { getParameterByName, randomString } from '../../utils/utils';

import Token from '../../models/token';
import User from '../../models/user';
import Lock from '../icons/lock';
import Unlock from '../icons/unlock';

interface ILoginProps {
  fetchArticles?: () => IAction;
  login?: (code: string) => IAction;
  logout?: (accessToken: string) => IAction;
  minimize?: boolean;
  refresh?: (accessToken: string, refreshToken: string) => IAction;
  user?: User;
  token?: Token;
}

@connect(mapStateToProps, { login, logout, refresh, fetchArticles })
class Login extends React.Component<ILoginProps, any> {

  private githubClientId = '43f96561038732c1d647';
  private githubUrl = `http://github.com/login/oauth/authorize`;

  constructor(props: any) {
    super(props);
    this.state = {
      showPrompt: false,
    };
    this.githubLogin = this.githubLogin.bind(this);
    this.logout = this.logout.bind(this);
    this.handleToggleShowPrompt = this.handleToggleShowPrompt.bind(this);
  }

  public componentWillUpdate(nextProps: ILoginProps) {
    const { fetchArticles, user } = this.props;
    if (!user && nextProps.user) {
      fetchArticles();
    }
  }

  public componentDidMount(): void {
    const foundCookie: boolean = this.authFromCookie();
    const urlCode = getParameterByName('code');
    const urlState = getParameterByName('state');

    const cookieState = cookie.get('randomstatestring');
    if (!foundCookie && urlCode) {
      if (cookieState === urlState) {
        cookie.remove('randomstatestring');
        this.props.login(urlCode);
      } else {
        console.log(cookieState);
        console.log(urlState);
        console.error('State does not match!');
      }
    }
    if (urlCode) {
      this.cleanUrl();
    }
  }

  public cleanUrl(): void {
    const cleanedUrl = window.location.href.split('?')[0];
    window.history.pushState('' , '', cleanedUrl);
  }

  public githubLogin(): void {
    const foundCookie: boolean = this.authFromCookie();
    if (!foundCookie) {
      const state = randomString(15);
      cookie.set('randomstatestring', state, { expires: 360 });
      const redirect: string = 'http://localhost:3000';
      const authString: string =  this.githubUrl +
                                `?client_id=${this.githubClientId}` +
                                '&redirect_uri=' + encodeURIComponent(redirect) +
                                `&state=${state}`;
      location.assign(authString);
    }
  }

  public authFromCookie(): boolean {
    const tokenString = cookie.get('auth_token');
    if (tokenString) {
      const token = JSON.parse(tokenString);
      this.props.refresh(token.accessToken, token.refreshToken);
      return true;
    }
    return false;
  }

  public logout(): void {
    const { logout, token } = this.props;
    logout(token.accessToken);
    this.setState({ showPrompt: false });
  }

  public handleToggleShowPrompt(): void {
    this.setState({ showPrompt: !this.state.showPrompt });
  }

  public render(): JSX.Element {
    const { minimize, user } = this.props;
    return (
      <div className="login__container">
        <div
          onClick={this.handleToggleShowPrompt}
          style={{ cursor: 'pointer' }}
        >
          {user ? <Unlock /> : <Lock />}
        </div>
        <div
          className="login__container-prompt"
          onClick={user ? this.logout : this.githubLogin}
          style={{
            display: this.state.showPrompt ? 'block' : 'none',
            marginLeft: user ? '-25px' : '-20px',
            marginTop: minimize ? '10px' : '20px',
          }}
        >
          {user ? 'Logout' : 'Login'}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: IReduxState) {
  return {
    token: state.auth.token,
    user: state.auth.user,
  };
}

export default Login;
