import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

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
import { useFontSizeChange } from './Hooks/useFontsizeChange.js';
import { useContrastChange } from './Hooks/useContrastChange.js';
import { useColorBlindnessChange } from './Hooks/useColorBlindnessChange.js';
import { useReadText } from './Hooks/useReadText.js';
import UseDocumentTitleUpdater from './Hooks/useDocumentTitleUpdater.js';

import Home from './pages/index';
import Error from './pages/error';
import Wcag from './pages/wcag';
import Docs from './pages/docs';
import Developer from './pages/developer';
import Designer from './pages/designer';
import AppLayout from './layouts/app';

export default function App() {

    useFontSizeChange();
    useContrastChange();
    useColorBlindnessChange();
    useReadText();

    return (
        <BrowserRouter>
            <UseDocumentTitleUpdater />
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/wcag" element={<Wcag />} />
                    <Route path="/docs" element={<Docs />} />
                    <Route path="/docs/developer" element={<Developer />} />
                    <Route path="/docs/designer" element={<Designer />} />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}
