<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <router-link to="/">
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />

          <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
            width="100"
          />
        </div>
      </router-link>

      <v-spacer></v-spacer>

      <router-link to="/card">
        <v-btn
          text
        >
          <span class="mr-2">Card</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </router-link>

      <router-link to="/form">
        <v-btn
          text
        >
          <span class="mr-2">Form</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </router-link>

      <router-link to="/table">
        <v-btn
          text
        >
          <span class="mr-2">Table</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
