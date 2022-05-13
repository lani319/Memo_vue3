<template>
  <div class="memo">
    <button type="button" class="btn btn-primary" @click="add()">+추가</button>
    <ul class="list-group">
      <li class="list-group-item" v-for="(item, idx) in state.data" :key="idx">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { reactive } from "vue";
  import axios from "axios";

  export default {
    setup() {
      const state = reactive({
        data: ["메모1", "메모2", "메모3", "메모4", "memo5"],
      });

      const add = () => {
        state.data.push("추가 메모");
      };

      axios.get("/api/memos", (req, res) => {
        console.log(res);
      });

      return { state, add };
    },
  };
</script>
<style></style>
