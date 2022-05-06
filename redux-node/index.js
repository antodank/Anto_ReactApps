const redux = require('redux');

//middleware to extend functionality
const reduxlogger = require('redux-logger')

const createStore = redux.createStore;

const combinereducer = redux.combineReducers;

const applymiddleware = redux.applyMiddleware;

const logger = reduxlogger.createLogger();

// action is a object with type property
// actioncreator is a fn that return action
const BUY_CAKE = 'BUY_CAKE';
const STOCK_CAKE = 'STOCK_CAKE';

const BUY_CHOCOLATE = 'BUY_CHOCOLATE';

function buyCake()
{
    return{
        type : BUY_CAKE
    }
}

function stockCake()
{
    return{
        type : STOCK_CAKE
    }
}

function buyChocolate()
{
    return{
        type : BUY_CHOCOLATE
    }
}

//reducer - is a function that accept state and action as arguament and return the next state of the application

const initial_cake_state = {
    noofcake : 10
};

const initial_chocolate_state = {
    noofchoclate : 10
};

const cakereducer = (state = initial_cake_state, action) => 
{
    switch(action.type)
    {
        case BUY_CAKE : return {
            ...state,
            noofcake : state.noofcake - 1
        }
        case STOCK_CAKE : return {
            ...state,
            noofcake : state.noofcake + 1
        }
        default : return state;
    }
}

const chocolatereducer = (state = initial_chocolate_state, action) => 
{
    switch(action.type)
    {
        case BUY_CHOCOLATE : return {
            ...state,
            noofcake : state.noofchoclate * 2
        }
        default : return state;
    }
}

const rootreducer = combinereducer({
    cakereducer : cakereducer,
    chocolatereducer : chocolatereducer
})


// one redux store for entire application
const  store = createStore(rootreducer,applymiddleware({logger}));
// holds application state

// to get application state
console.log('Initial State - ' , store.getState());

//registers listeners -> subscribe(listeners)
const subscribe = store.subscribe( () => {console.log('Updated State - ' , store.getState())});

// state can be updated via dispatch
store.dispatch(buyCake());

store.dispatch(buyCake());

store.dispatch(stockCake());

store.dispatch(buyChocolate());

subscribe();
