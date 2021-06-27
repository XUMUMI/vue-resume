import intros from "@/info/intros.json";
import contents from "@/info/contents.json";

import Header from "@/components/Header/Header.vue";
import Body from "@/components/Body/Body.vue";

export default {
  name: "App",
  components: { Header, Body },
  data() {
    return {
      intros,
      contents,
    };
  },
};
