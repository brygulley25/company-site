import React from 'react';
import App from './App';


import { createRoot } from 'react-dom/client';
import {disableReactDevTools} from '@fvilers/disable-react-devtools';

if (process.env.NODE_ENV === 'production') disableReactDevTools()

const root = createRoot(document.getElementById('root'));
root.render(<App />);
