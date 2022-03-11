console.clear();
document.write('<link rel="stylesheet" href="https://gitee.com/ponyjie/mySou/raw/master/2022/03/upgit_20220304_1646380560.css">');
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
