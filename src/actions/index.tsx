import { IAction } from '../constants/interfaces';
import { ACTIONS } from '../constants/types';

import Article from '../models/article';
import Tag from '../models/tag';

const tag1 = { id: 1, name: 'tag1' };
const tag2 = { id: 2, name: 'tag2' };
const tag3 = { id: 3, name: 'tag3' };

const article1 = new Article({
  id: 1,
  title: 'This is a test1',
  description: 'An update on one other thing',
  date: '2017-03-01T12:30:00',
  text: `research, pattern systems and user experience. Library and pattern-led design are 
  responsible for sites that could be mistaken for having a place in the cereal aisle of a 
  supermarket (just look at Bootstrap sites). Yet, I believe there’s room at the table for 
  both the structured patternisation and the soul of design to coexist; but it’s not a question 
  of how, it's a question of when. To me, the soul that Andy spoke of is entirely about finding 
  humanity, it’s the same humanity that Aaron Walter spoke about in his book Designing for 
  emotion – it’s about anthropomorphising the web.` ,
  tags: [tag1, tag2, tag3],
});

const article2 = new Article({
  id: 2,
  title: 'This is a test2',
  description: 'An update on one other thing',
  date: '2017-03-13T13:30:00',
  text: `research, pattern systems and user experience. Library and pattern-led design are 
  responsible for sites that could be mistaken for having a place in the cereal aisle of a 
  supermarket (just look at Bootstrap sites). Yet, I believe there’s room at the table for 
  both the structured patternisation and the soul of design to coexist; but it’s not a question 
  of how, it's a question of when. To me, the soul that Andy spoke of is entirely about finding 
  humanity, it’s the same humanity that Aaron Walter spoke about in his book Designing for 
  emotion – it’s about anthropomorphising the web.` ,
  tags: [tag1, tag2, tag3],
});

const article3 = new Article({
  id: 3,
  title: 'This is a test3',
  description: `for having a place in the cereal aisle of a 
  supermarket (just look at Bootstrap sites). Yet, I believe there’s room at the table for 
  both the structured patternisation and the soul of design to coexist; but it’s not a question 
  of how, it's a question of when. To me, the soul that`,
  date: '2017-03-04T14:30:00',
  text: `research, pattern systems and user experience. Library and pattern-led design are 
  responsible for sites that could be mistaken for having a place in the cereal aisle of a 
  supermarket (just look at Bootstrap sites). Yet, I believe there’s room at the table for 
  both the structured patternisation and the soul of design to coexist; but it’s not a question 
  of how, it's a question of when. To me, the soul that Andy spoke of is entirely about finding 
  humanity, it’s the same humanity that Aaron Walter spoke about in his book Designing for 
  emotion – it’s about anthropomorphising the web.` ,
  tags: [tag1, tag2, tag3],
});

const article4 = new Article({
  id: 4,
  title: 'This is a test4',
  description: `for having a place in the cereal aisle of a 
  supermarket (just look at Bootstrap sites). Yet, I believe there’s room at the table for 
  both the structured patternisation and the soul of design to coexist; but it’s not a question 
  of how, it's a question of when. To me, the soul that`,
  date: '2017-03-04T14:30:00',
  text: `research, pattern systems and user experience. Library and pattern-led design are 
  responsible for sites that could be mistaken for having a place in the cereal aisle of a 
  supermarket (just look at Bootstrap sites). Yet, I believe there’s room at the table for 
  both the structured patternisation and the soul of design to coexist; but it’s not a question 
  of how, it's a question of when. To me, the soul that Andy spoke of is entirely about finding 
  humanity, it’s the same humanity that Aaron Walter spoke about in his book Designing for 
  emotion – it’s about anthropomorphising the web.
  
  research, pattern systems and user experience. Library and pattern-led design are 
  responsible for sites that could be mistaken for having a place in the cereal aisle of a 
  supermarket (just look at Bootstrap sites). Yet, I believe there’s room at the table for 
  both the structured patternisation and the soul of design to coexist; but it’s not a question 
  of how, it's a question of when. To me, the soul that Andy spoke of is entirely about finding 
  humanity, it’s the same humanity that Aaron Walter spoke about in his book Designing for 
  emotion – it’s about anthropomorphising the web.
  
  
  research, pattern systems and user experience. Library and pattern-led design are 
  responsible for sites that could be mistaken for having a place in the cereal aisle of a 
  supermarket (just look at Bootstrap sites). Yet, I believe there’s room at the table for 
  both the structured patternisation and the soul of design to coexist; but it’s not a question 
  of how, it's a question of when. To me, the soul that Andy spoke of is entirely about finding 
  humanity, it’s the same humanity that Aaron Walter spoke about in his book Designing for 
  emotion – it’s about anthropomorphising the web.
  
  
  
  research, pattern systems and user experience. Library and pattern-led design are 
  responsible for sites that could be mistaken for having a place in the cereal aisle of a 
  supermarket (just look at Bootstrap sites). Yet, I believe there’s room at the table for 
  both the structured patternisation and the soul of design to coexist; but it’s not a question 
  of how, it's a question of when. To me, the soul that Andy spoke of is entirely about finding 
  humanity, it’s the same humanity that Aaron Walter spoke about in his book Designing for 
  emotion – it’s about anthropomorphising the web.
  
  research, pattern systems and user experience. Library and pattern-led design are 
  responsible for sites that could be mistaken for having a place in the cereal aisle of a 
  supermarket (just look at Bootstrap sites). Yet, I believe there’s room at the table for 
  both the structured patternisation and the soul of design to coexist; but it’s not a question 
  of how, it's a question of when. To me, the soul that Andy spoke of is entirely about finding 
  humanity, it’s the same humanity that Aaron Walter spoke about in his book Designing for 
  emotion – it’s about anthropomorphising the web.
  research, pattern systems and user experience. Library and pattern-led design are 
  responsible for sites that could be mistaken for having a place in the cereal aisle of a 
  supermarket (just look at Bootstrap sites). Yet, I believe there’s room at the table for 
  both the structured patternisation and the soul of design to coexist; but it’s not a question 
  of how, it's a question of when. To me, the soul that Andy spoke of is entirely about finding 
  humanity, it’s the same humanity that Aaron Walter spoke about in his book Designing for 
  emotion – it’s about anthropomorphising the web.
  
  
  research, pattern systems and user experience. Library and pattern-led design are 
  responsible for sites that could be mistaken for having a place in the cereal aisle of a 
  supermarket (just look at Bootstrap sites). Yet, I believe there’s room at the table for 
  both the structured patternisation and the soul of design to coexist; but it’s not a question 
  of how, it's a question of when. To me, the soul that Andy spoke of is entirely about finding 
  humanity, it’s the same humanity that Aaron Walter spoke about in his book Designing for 
  emotion – it’s about anthropomorphising the web.` ,
  tags: [tag1, tag2, tag3],
});

const article5 = new Article({
  id: 5,
  title: 'This is a test5',
  description: `for having a place in the cereal aisle of a 
  supermarket (just look at Bootstrap sites). Yet, I believe there’s room at the table for 
  both the structured patternisation and the soul of design to coexist; but it’s not a question 
  of how, it's a question of when. To me, the soul that`,
  date: '2017-03-04T14:30:00',
  text: `research, pattern systems and user experience. Library and pattern-led design are 
  responsible for sites that could be mistaken for having a place in the cereal aisle of a 
  supermarket (just look at Bootstrap sites). Yet, I believe there’s room at the table for 
  both the structured patternisation and the soul of design to coexist; but it’s not a question 
  of how, it's a question of when. To me, the soul that Andy spoke of is entirely about finding 
  humanity, it’s the same humanity that Aaron Walter spoke about in his book Designing for 
  emotion – it’s about anthropomorphising the web.` ,
  tags: [tag1, tag2, tag3],
});

export function fetchArticles(): IAction {
  // const request = axios.get(url, types.API_CONFIG);
  return {
    payload: [article1, article2, article3, article4, article5],
    type: ACTIONS.FETCH_ARTICLES,
  };
}
