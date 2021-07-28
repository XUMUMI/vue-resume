import intros from "@/info/intros.json";
import contents from "@/info/contents.json";

import Header from "@/components/Header/Header.vue";
import Body from "@/components/Body/Body.vue";
import Icon from "@/components/Header/Intro/Icon/Icon.vue";

export default {
  name: "App",
  components: { Header, Body, Icon },
  data() {
    return {
      intros,
      contents,
    };
  },
};
