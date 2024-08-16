
import {Header} from './components/header.jsx'
import {Profile} from './components/profile.jsx'
import {Portfolio} from './components/portfolio.jsx' 
import {Contact} from './components/contact.jsx'
import {Footer} from './components/footer.jsx'
import {AccessibilityControls} from './components/accesibityControls.jsx'
import {useFontSizeChange} from './Hooks/useFontsizeChange.js'
import {useContrastChange} from './Hooks/useContrastChange.js'
import {useColorBlindnessChange} from './Hooks/useColorBlindnessChange.js'
import {useReadText} from './Hooks/useReadText.js'
 
const App = () => {
  
  useFontSizeChange()
  useContrastChange()
  useColorBlindnessChange()
  //useReadText()
  
  return (
    <>
        <Header/>
        <AccessibilityControls />
        <Profile />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  );
};

export default App;