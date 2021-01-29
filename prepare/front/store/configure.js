// ConfigureStore.js
import {createWrapper} from 'next-redux-wrapper';

const configureStore = () => {



};

const wrapper = createWrapper(configureStore, {
    debug : process.env.NODE_ENV === 'development', //Option 객체 
});

export default wrapper;