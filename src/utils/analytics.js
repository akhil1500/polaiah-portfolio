import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-E09KEK4B5Y'); // replace with your Measurement ID
};

export const trackPageView = () => {
  ReactGA.send({
    hitType: 'pageview',
    page: window.location.pathname,
  });
};

export const trackEvent = (eventName, params = {}) => {
    ReactGA.event(eventName, params);
}