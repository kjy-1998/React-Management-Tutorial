import React from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: '김재윤',
    birthday: '980721',
    gender: '남자',
    job: '개발자',
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: '이도윤',
    birthday: '9801221',
    gender: '남자',
    job: '예비개발자',
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: '홍정우',
    birthday: '9801231',
    gender: '남자',
    job: '엘리베이터 현장소장',
  }
];

function App() {
  return (
    <React.Fragment>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              job={c.job}/>
          );
        })
      }
    </React.Fragment>
  );
}

export default App;
