//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import HomePage from './components/homepage.tsx';
import reportWebVitals from './reportWebVitals';
import initializeFB from './services/initializeFB.tsx';


let root = document.getElementById("root");
if (root)
	initializeFB.authenticate().then(() =>
		createRoot(root!).render(
			<HashRouter>
				<div>
					<HomePage/>
				</div>
			</HashRouter>
		)
	);

reportWebVitals();
