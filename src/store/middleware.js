
export const loggerMiddleware = (store) => (next) => (action) =>{
    console.log('store', store.getState())
    const res = next(action)
    console.log('newStore', store.getState())
    return res
}