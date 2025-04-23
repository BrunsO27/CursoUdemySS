import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    console.log('hola mundo');

    return {
      // Properties

      // Getters
      allSizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],

      // Acttions
    };
  },
});
