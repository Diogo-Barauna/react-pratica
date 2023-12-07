import { useState } from 'react';
import CoreConcept from './components/CoreConcept.jsx';
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton.jsx';
import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js'

function App() {
  const [selectedTopic, setSelectedTopic] = useState('');

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  };

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key = {conceptItem} {...conceptItem} />))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected = {selectedTopic === 'components'} onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected = {selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected = {selectedTopic === 'props'} onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected = {selectedTopic === 'state'} onSelect={() => handleClick('state')}>State</TabButton>
          </menu>
          {!selectedTopic ? <p>Select a topic</p> : <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>}
        </section>
      </main>
    </div>
  );
}

export default App;
