

  const { createApp } = Vue;

  createApp({
    data() {
      return {
        lista: [],
      };
    },

    methods: {
      async loadUsers() {
        const response = await fetch("https://reqres.in/api/users?per_page=12");
        const elementos = await response.json();
        this.lista = elementos.data;
      },
    },

    mounted() {
      this.loadUsers();
    },
  }).mount("#itemPessoa");