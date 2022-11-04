function createAnalytics() {
    let counter = 0;
    let destroed = false;

    console.log('title');

    const listener = () => counter++;

    document.addEventListener('click', listener)
    return {
        destroy() {
            document.removeEventListener('click', listener);
            destroed = true;
        },
        getClicks() {
            if (destroed) {
                return `Analytics is destroyed! Total clicks ${counter}`;
            }
            return counter
        }
    }
}
window.analytics = createAnalytics();