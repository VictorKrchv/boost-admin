import { createEvent, createStore } from 'effector';
import { Viewer } from './types';

const checkSession = createEvent();

const $session = createStore<string | null>(null);
const $isAuthenticated = $session.map(Boolean);

const $viewer = createStore<Viewer | null>(null);
