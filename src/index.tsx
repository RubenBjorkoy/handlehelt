//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import HomePage from './components/homepage.tsx';
import reportWebVitals from './reportWebVitals';


let root = document.getElementById("root");
if (root)
	createRoot(root).render(
		<HashRouter>
			<div>
				<HomePage/>
			</div>
		</HashRouter>
	);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
