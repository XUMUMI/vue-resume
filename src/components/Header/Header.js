import Avatar from "@/components/Header/Avatar/Avatar.vue";
import Info from "@/components/Header/Info/Info.vue";
import Intro from "@/components/Header/Intro/Intro.vue";

export default {
  name: "Header",
  components: { Avatar, Info, Intro },
  props: { intros: Object },
};
