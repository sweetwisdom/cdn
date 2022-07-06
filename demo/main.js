var Main = {
  data() {
    return {
      age: "123",
    };
  },
  watch: {},
  computed: {},
  mounted() {},
  created() {},

  methods: {},
};

var Ctor = Vue.extend(Main);
var app = new Ctor().$mount("#app");

