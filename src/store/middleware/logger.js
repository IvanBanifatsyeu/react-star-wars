export const logger = (store) => (next) => (action) => {
    // console.group(action.type);
    // console.info('dispatching', action);
    // console.log('prev state', store.getState()) // Выводим предыдущее состояние в консоль
    const result = next(action);
    // console.log('next state', store.getState()); // Выводим новое состояние в консоль
    // console.groupEnd();
    return result;
};
