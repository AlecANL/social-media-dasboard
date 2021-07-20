import { useEffect, useState } from 'react';
import Header from './components/header/header.component';
import Wrapper from './components/wrapper/wrapper.component';
import Switch from './components/switch/switch.component';
import data from './data.json';
import './app.css';
import SocialStatsList from './components/social-stats/social-stats-list/social-stats-list.component';

function App() {
  const [socialMediaStats] = useState(data);
  const [isDarkMode, setDarkMode] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const colorScheme = isDarkMode ? 'dark-mode' : 'light-mode';

  function handleMatchMedia(mqList) {
    setDarkMode(mqList.matches);
    setChecked(mqList.matches);
  }

  useEffect(() => {
    const mqList = window.matchMedia('(prefers-color-scheme: dark)');
    mqList.addEventListener('change', handleMatchMedia);
    setDarkMode(mqList.matches);
    setChecked(mqList.matches);
    console.log(mqList);
    return () => {};
  }, []);

  return (
    <div className={`dashboard-app ${colorScheme}`}>
      <Wrapper>
        <Header>
          <Switch
            setDarkMode={setDarkMode}
            isChecked={isChecked}
            setChecked={setChecked}
          />
        </Header>
        <main>
          <SocialStatsList stats={socialMediaStats.stats_social_media} />
        </main>
      </Wrapper>
    </div>
  );
}

export default App;
