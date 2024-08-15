import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {useFontSizeChange} from './Hooks/useFontsizeChange.js'
import {useContrastChange} from './Hooks/useContrastChange.js'
import {useColorBlindnessChange} from './Hooks/useColorBlindnessChange.js'
import {useReadText} from './Hooks/useReadText.js'

import Home from './pages/index';
import Error from './pages/error';
import Wcag from './pages/wcag';
import Docs from './pages/docs';
import Developer from './pages/developer';
import Designer from './pages/designer';
import AppLayout from './layouts/app';

export default function App() {

    useFontSizeChange()
    useContrastChange()
    useColorBlindnessChange()
    useReadText()
    
    return (
        <>
            <BrowserRouter>
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
        </>
    );
};