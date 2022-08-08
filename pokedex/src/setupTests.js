// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import mediaQuery from "css-mediaquery";
import '@testing-library/jest-dom';

  function createMatchMedia(width) {
    return (query) => ({
      matches: mediaQuery.match(query, {
        width,
      }),
      addListener: () => {},
      removeListener: () => {},
    });
  }
  global.beforeAll(() => {
    window.matchMedia = createMatchMedia(window.innerWidth);
  });
