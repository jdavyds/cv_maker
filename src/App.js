import './App.css';
import { Header } from './components/header';
import { Objective } from './components/objective'
import { Contact } from './components/contact'
import { Experience } from './components/experience'
import { Education } from './components/education'
import { Socials } from './components/social'
import { Skills } from './components/skills'

function App() {
  
  return (
    <body className="App">
     <Header />
     <main className='main'>
     <section className='section'>
     <Objective />
     <Experience />
     <Education />
     </section>
    <aside className='aside'>
     <Contact />
     <Socials />
     <Skills />
    </aside>
     </main>
    </body>
  );
}

export default App;
