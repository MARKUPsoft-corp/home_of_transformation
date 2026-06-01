import { renderApp } from 'rasengan/client';
import App from './main';
import AppRouter from '@/app/app.router';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

renderApp(App, AppRouter, { reactStrictMode: true });
