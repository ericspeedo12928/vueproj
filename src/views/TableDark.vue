<template>
  <v-container class="p-5">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-uppercase text--primary">
              Dessert (100g serving)
            </th>
            <th class="text-center text-uppercase text--primary">
              Calories
            </th>
            <th class="text-center text-uppercase text--primary">
              Fat (g)
            </th>
            <th class="text-center text-uppercase text--primary">
              Carbs (g)
            </th>
            <th class="text-center text-uppercase text--primary">
              Protein (g)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in desserts"
            :key="item.dessert"
          >
            <td>{{ item.dessert }}</td>
            <td class="text-center">
              {{ item.calories }}
            </td>
            <td class="text-center">
              {{ item.fat }}
            </td>
            <td class="text-center">
              {{ item.carbs }}
            </td>
            <td class="text-center">
              {{ item.protein }}
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          dessert: 'Frozen Yogurt',
          calories: 159,
          fat: 6,
          carbs: 24,
          protein: 4,
        },
        {
          dessert: 'Ice cream sandwich',
          calories: 237,
          fat: 6,
          carbs: 24,
          protein: 4,
        },
        {
          dessert: 'Eclair',
          calories: 262,
          fat: 6,
          carbs: 24,
          protein: 4,
        },
        {
          dessert: 'Cupcake',
          calories: 305,
          fat: 6,
          carbs: 24,
          protein: 4,
        },
        {
          dessert: 'Gingerbread',
          calories: 356,
          fat: 6,
          carbs: 24,
          protein: 4,
        },
      ],
    }
  },
}
</script>
