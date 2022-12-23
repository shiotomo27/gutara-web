import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'default',
      themes: {
        default: {
          dark: false,
          colors: {
            secondary: "#2b2b2b",
          }
        }
      }
    }
  });

  nuxtApp.vueApp.use(vuetify);
});