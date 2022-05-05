import { createI18n } from "vue-i18n";

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
function loadLocaleMessages() {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key).default;
    }
  });
  return messages;
}

function getLocaleFromUrl() {
  let uri = window.location.href.split("?");
  if (uri.length == 2) {
    let vars = uri[1].split("&");
    let getVars = {};
    let tmp = "";
    vars.forEach(function (v) {
      tmp = v.split("=");
      if (tmp.length == 2) getVars[tmp[0]] = tmp[1];
    });
    if (getVars.locale) {
      const locale = getVars["locale"];
      console.log(locale);
      return locale;
    }
    // do
  }
  return null;
}

export default createI18n({
  legacy: false,
  locale: getLocaleFromUrl() || process.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: loadLocaleMessages(),
  globalInjection: true,
});

// export const translate = (key) => {
//   if (!key) {
//       return '';
//   }
//   return i18n.global.t(key);
// };
