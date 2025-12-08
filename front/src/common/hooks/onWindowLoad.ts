export const useOnWindowLoad = (cb: Function) => {
    window.onload = () => {
        cb();
    };
}
