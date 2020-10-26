import React from 'react'
import './styles/styles.scss';

import { Provider } from 'react-redux'

import { AppRouter } from './components/routers/AppRouter';
import { store } from './store/store';

export const JournalApp = () => {
    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    )
}
