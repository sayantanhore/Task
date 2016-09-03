export const util = {

  getHashCode: function(str) {
    let milSec;
    let hash = 0;
    for (i = 0; i < str.length; i++) {
      char = str.charCodeAt(i);
      milSec = new Date().getMilliseconds();
      hash = char + (hash << 6) + (hash << 8) - hash;
    }
    return (Math.abs(hash) + new Date().getMilliseconds()).toString(16);
  }
}
