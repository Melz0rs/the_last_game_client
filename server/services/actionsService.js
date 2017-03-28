export default {

  findCurrentListener: function(currentListeners, listenerName) {
    return currentListeners.filter(currentListener => {
      const currentListenerName = currentListener.name;

      return currentListenerName === listenerName;
    })[0];
  }

};
