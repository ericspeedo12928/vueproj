<template>
  <v-container class="p-5">
    <v-form class="multi-col-validation">
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            label="First Name"
            outlined
            dense
            placeholder="First Name"
            hide-details
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            label="Last Name"
            outlined
            dense
            placeholder="Last Name"
            hide-details
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            label="Email"
            outlined
            dense
            placeholder="Email"
            hide-details
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            label="City"
            outlined
            dense
            placeholder="City"
            hide-details
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            label="Country"
            outlined
            dense
            placeholder="Country"
            hide-details
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            label="Company"
            outlined
            dense
            placeholder="Company"
            hide-details
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-checkbox
            label="Remember me"
            class="mt-0"
            hide-details
          ></v-checkbox>
        </v-col>

        <v-col cols="12">
          <v-btn color="primary">
            Submit
          </v-btn>
          <v-btn
            type="reset"
            outlined
            class="mx-2"
          >
            Reset
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
}
</script>
