// plugins/vuetify.ts
import { createVuetify } from 'vuetify';
import { VApp } from 'vuetify/components';
import 'vuetify/styles';

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        components: {
            VApp
        },
        theme: {
            defaultTheme: 'light',
        },
    });

    nuxtApp.vueApp.use(vuetify);
});
