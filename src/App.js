// import logo from './logo.svg';
import { useState } from 'react';
import { supabase } from './supabaseClient'; 
import './App.css';

function Library() {
  const [myBooks, setMyBooks] = useState([]);
  async function getBooks() {
    let { data: books, error } = await supabase
      .from('books')
      .select('*')
    setMyBooks(books);
  }
  getBooks();
  return (
    <table>
    {
      myBooks.map(b => (
        <tr>
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{b.isbn}</td>
        </tr>
      ))
    }
    </table>
  )
}

const magazines = [
  { id: 1, title: 'Architectiral Digest', theme: 'architecture', isAvailable: true },
  { id: 2, title: 'Dwell', theme: 'architecture', isAvailable: true },
  { id: 3, title: 'Communication Arts', theme: 'design', isAvailable: false },
];

function ZineRack() {
  const listZines = magazines.map(zine =>
    <li
    key={zine.id}
    style={{
      color: zine.isAvailable ? 'green' : 'red'
    }}
    >
      {zine.title}
    </li>
  );
  return (
    <ul>{listZines}</ul>
  )
}

const book = {
  title: 'Kafka on the Shore',
  author: 'Haruki Murakami',
  published: '2002',
  image: 'data:image/webp;base64,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',
  width: '264',
  height: '378'
};

function Bookshelf() {
  return (
    <div>
      <h2>{book.title} ({book.published})</h2>
      <p>{book.author}</p>
      {book.image &&
      <img
        className="bookCover"
        src={book.image}
        alt={book.title + 'cover'}
        style={{
          width: book.width,
          height: book.height
        }}
      />
      }
    </div>
  );
}

function MagicButton() {
  const [count,setCount] = useState(0);
  function doMagic () {
    setCount(count + 1)
  }
  return (
    <div>
      <h3>This is a magic button</h3>
      <button onClick={doMagic}>Magic {count}</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Library/>
        <ZineRack/>
        <Bookshelf/>
        <MagicButton/>
      </header>
    </div>
  );
}

export default App;
