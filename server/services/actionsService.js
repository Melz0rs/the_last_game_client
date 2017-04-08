export default {

  findCurrentListener: function(currentListeners, listenerName) {
    return currentListeners.filter(currentListener => {
      const currentListenerName = currentListener.listenerName;

      return currentListenerName === listenerName;
    })[0];
  }

};
