<template>
  <div class="memo">
    <button type="button" class="btn btn-primary" @click="add()">+추가</button>

    <div class="container">
      <div class="row">
        <div class="col row align-items-center">순번</div>
        <div class="col-6 row align-items-center">메모</div>
        <div class="col row align-items-center">작성자</div>
        <div class="col row align-items-center">날짜</div>
        <div class="col row align-items-center"></div>
      </div>
      <div class="row" v-for="(item, idx) in state.data" :key="idx">
        <div class="col row align-items-center" @click="edit(item.id, idx)">
          {{ idx }}
        </div>
        <div class="col-6 row align-items-center" @click="edit(item.id, idx)">
          {{ item.content }}
        </div>
        <div class="col row align-items-center" @click="edit(item.id, idx)">
          author
        </div>
        <div class="col row align-items-center" @click="edit(item.id, idx)">
          date
        </div>
        <div class="col row align-items-center">
          <i class="bi bi-trash" @click="del(item.id)"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { onMounted, reactive } from "vue";
  import axios from "axios";

  export default {
    setup() {
      const state = reactive({
        data: [],
      });

      const add = () => {
        const content = prompt("내용 넣어주세요");

        //state.data.push("추가 메모");
        axios.post("/api/memos/", { content }).then((res) => {
          if (res.status === 200) {
            getList();
          }
        });
      };

      const edit = (id, idx) => {
        const content = prompt("내용 넣어주세요", state.data[idx].content);

        axios.put("/api/memos/" + id, { content }).then((res) => {
          //state.data = res.data;
          if (res.status === 200) {
            getList();
          }
        });
      };

      const getList = () => {
        axios.get("/api/memos/").then((res) => {
          state.data = res.data;
        });
      };

      const del = (id) => {
        axios.delete("/api/memos/" + id).then((res) => {
          if (res.status === 200) {
            getList();
          }
        });
      };

      onMounted(() => getList());
      return { state, add, edit, getList, del };
    },
  };
</script>
<style></style>
