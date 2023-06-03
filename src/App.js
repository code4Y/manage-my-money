import './App.css';
import { useState } from 'react';

function App() {
  const [name,setName] = useState('');
  const [datetime,setDatetime] = useState('');
  const [description,setDescription] = useState('');
  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL+'/transaction';
    fetch(url, {
      method: 'POST',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify({name,description,datetime})
    }).then(response => {
      response.json().then(json => {
        console.log('result', json); 
      });
    });
  }
  return (
  <main>
    <h1>$400<span>.00</span></h1>
    <form onSubmit={addNewTransaction}>
      <div className='basic'>
        <input type='text' 
               value={name}
               onChange={ev => setName(ev.target.value)}
               placeholder={'+200 new headphones'}/>
        <input value={datetime}
               onChange={ev => setDatetime(ev.target.value)}
               type="datetime-local"/>
      </div>
      <div className='description'>
        <input type='text' 
               value={description}
               onChange={ev => setDescription(ev.target.value)}
               placeholder={'description'}/>
      </div>
      <button type='submit'>Add new transaction</button>
    </form>
    <div className='transactions'>
      <div className='transaction'>
        <div className='left'>
          <div className='name'>New headphones</div>
          <div className='description'>old one's worn out</div>
        </div>
        <div className='right'>
          <div className='price red'>-$200</div>
          <div className='datetime'>2023-05-27 19:26</div>
        </div>
      </div>

      <div className='transaction'>
        <div className='left'>
          <div className='name'>Internship</div>
          <div className='description'>old one's worn out</div>
        </div>
        <div className='right'>
          <div className='price green'>+$400</div>
          <div className='datetime'>2023-05-27 19:26</div>
        </div>
      </div>

      <div className='transaction'>
        <div className='left'>
          <div className='name'>iPad</div>
          <div className='description'>old one's worn out</div>
        </div>
        <div className='right'>
          <div className='price red'>-$600</div>
          <div className='datetime'>2023-05-27 19:26</div>
        </div>
      </div>
    </div>
  </main>
  );
}

export default App;