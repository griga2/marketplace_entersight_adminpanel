<template class="table">

    <v-card fluid style="width: 100%;">
      
      <template v-slot:text>
        
        <v-text-field 
          max-width="800"
          height="200"
          v-model="search"
          label="Поиск товаров по названию, коду или поставщику"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          hide-details
          single-line
          
        ></v-text-field>
      </template>
  
      <v-data-table
        show-select
        :headers="headers"
        :items="desserts"
        :search="search"

      ></v-data-table>
    </v-card>
  </template>
  
  <script>
    export default {
      data() {
        return {
          search: '',
          
          headers: [
            {
              align: 'start',
              key: 'name',
              sortable: true,
              title: 'Наименование',
            },
            { key: 'calories', title: 'Остаток' },
            { key: 'fat', title: 'фцв' },
            { key: 'carbs', title: 'Закуп. цена' },
            { key: 'protein', title: 'Роз. цена' },
            { key: 'iron', title: 'Торг. наценка' },
          ],
          desserts: [
            {
              name: 'Frozen Yogurt',
              calories: 159,
              fat: 6.0,
              carbs: 24,
              protein: 4.0,
              iron: 1,
            },
            {
              name: 'Ice cream sandwich',
              calories: 237,
              fat: 9.0,
              carbs: 37,
              protein: 4.3,
              iron: 1,
            },
            {
              name: 'Eclair',
              calories: 262,
              fat: 16.0,
              carbs: 23,
              protein: 6.0,
              iron: 7,
            },
            {
              name: 'Cupcake',
              calories: 305,
              fat: 3.7,
              carbs: 67,
              protein: 4.3,
              iron: 8,
            },
            {
              name: 'Gingerbread',
              calories: 356,
              fat: 16.0,
              carbs: 49,
              protein: 3.9,
              iron: 16,
            },
            {
              name: 'Jelly bean',
              calories: 375,
              fat: 0.0,
              carbs: 94,
              protein: 0.0,
              iron: 0,
            },
            {
              name: 'Lollipop',
              calories: 392,
              fat: 0.2,
              carbs: 98,
              protein: 0,
              iron: 2,
            },
            {
              name: 'Honeycomb',
              calories: 408,
              fat: 3.2,
              carbs: 87,
              protein: 6.5,
              iron: 45,
            },
            {
              name: 'Donut',
              calories: 452,
              fat: 25.0,
              carbs: 51,
              protein: 4.9,
              iron: 22,
            },
            {
              name: 'KitKat',
              calories: 518,
              fat: 26.0,
              carbs: 65,
              protein: 7,
              iron: 6,
            },
          ],
        }
      },
    }
  </script>
  
  <style scoped>

.table{
    height: 100%;
}

  </style>