import * as moment from 'moment';
import * as React from 'react';
import { Link } from 'react-router-dom';

import connect from '../../utils/connect';

import { IReduxState } from '../../constants/interfaces';
import Article from '../../models/article';
import Tag from '../../models/tag';
import ArticleModal from './article_modal';
import DisplayBox from './display_box';
import EditBox from './edit_box';

export interface IWriterProps {
  articles: Article[];
  activeArticle: Article;
  match: any;
}

export interface IWriterState {
  article: Article;
  mode: string;
  showArticleModal: boolean;
}

@connect(mapStateToProps)
export default class Writer extends React.Component<IWriterProps, IWriterState> {

  public emptyArticle: any = new Article({
    date: moment().format('YYYY-MM-DDTHH:MM:SS'),
    description: '',
    id: -1,
    tags: [],
    text: '',
    title: '',
  });

  public defaultState: IWriterState = {
    article: this.emptyArticle,
    mode: 'create',
    showArticleModal: false,
  };

  constructor(props: IWriterProps) {
    super(props);
    this.state = this.defaultState;
    this.handleClear = this.handleClear.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggleModal = this.handleToggleModal.bind(this);
  }

  public componentDidMount() {
    const article = JSON.parse(localStorage.getItem('writer_form'));
    if (article) {
      this.setState({...this.state, article: new Article(article) });
    }
  }

  public componentWillReceiveProps(nextProps: IWriterProps) {
    if (nextProps.match.params && !nextProps.match.params.title) {
      this.setState({ article: this.emptyArticle });
    } else if (nextProps.activeArticle) {
      this.setState({ article: nextProps.activeArticle });
    }
  }

  public renderButtons(): JSX.Element {
    if (this.props.activeArticle) {
      return <button name="update">Update</button>;
    }
    return <button name="submit">Submit</button>;
  }

  public handleInputChange({ currentTarget }: React.FormEvent<HTMLInputElement>): void {
    const updatedArticle: any = this.state.article.clone();
    updatedArticle[currentTarget.name] = currentTarget.value;
    this.setState({ article: updatedArticle }, () => {
      localStorage.setItem('writer_form', updatedArticle.stringify());
    });
  }

  public handleToggleModal(): void {
    this.setState({ ...this.state, showArticleModal: !this.state.showArticleModal });
  }

  public handleClear(): void {
    this.setState(this.defaultState);
    localStorage.removeItem('writer_form');
  }

  public render(): JSX.Element {
    const { article, mode, showArticleModal } = this.state;
    const { articles, activeArticle } = this.props;
    return (
      <section className="writer__container" >
        <ArticleModal
          visible={showArticleModal}
          articles={articles}
          closeModal={this.handleToggleModal}
        />
        <div
          className="writer__inner-container"
          style={{ opacity: showArticleModal ? 0.4 : 1 }}
        >
          <div className="writer__display-container">
            <EditBox
              change={this.handleInputChange}
              article={article}
            />
            <DisplayBox article={article} />
          </div>
          <div className="writer__form-container">
            {this.renderButtons()}
            <Link to="/write">
              <button name="Cancel" onClick={this.handleClear}>Cancel</button>
            </Link>
            <button name="toggle" onClick={this.handleToggleModal}>Articles</button>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state: IReduxState, ownProps: any): {} {
  const inputUrlTitle = ownProps.match.params.title;
  const activeArticle = state.data.articles.find((a) => a.urlTitle === inputUrlTitle);
  return {
    articles: state.data.articles,
    activeArticle,
  };
}
