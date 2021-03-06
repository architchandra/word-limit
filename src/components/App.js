import { useState } from 'react';
import TextBox from './TextBox';
import Results from './Results';



function App() {
  const [text, setText] = useState('');

  function handleOnChange(e) {
    setText(e.target.value);
  }

  return (
    <main className="my-12 sm:my-20">
      <div className="container text-center">
        <div className="mb-12">
          <h1 className="mb-1 title-h1 text-orange">
            Word Limit
          </h1>
          <h3>
            A simple word and character counter. Free to use.
          </h3>
        </div>
        <Results text={text} />
        <TextBox text={text} handleOnChange={handleOnChange} />
      </div>
    </main>
  );
}



export default App;
