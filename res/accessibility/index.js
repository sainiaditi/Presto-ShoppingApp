const en_US = require('./en_US')

const languages = {
	"en_US": en_US
};

module.exports = () => {
  let lang = languages[window.LANGUAGE] || {};
  let strings = {};
  for (let i in en_US) {
    if (lang[i])
      strings[i] = lang[i];
    else
      strings[i] = en_US[i];
  }
  return strings;
}