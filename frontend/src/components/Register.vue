<template>
  <div class="login">
    <form @submit.prevent="submit()">
      <h1 class="h3 mb-3 fw-normal">Please Register</h1>
      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          name="email"
          v-model="state._email"
        />
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          name="password"
          v-model="state._password"
        />
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Register
      </button>
    </form>
  </div>
</template>

<script>
  import axios from "axios";
  import { reactive } from "vue";
  import { router } from "@/routes/routes";

  export default {
    setup() {
      const RegistUrl = "/api/member/regist/";

      const state = reactive({
        _email: "",
        _password: "",
      });

      const submit = () => {
        var data = {
          email: state._email,
          password: state._password,
        };

        axios.post(RegistUrl, data).then((res) => {
          if (res.status === 200) {
            alert("Regist Success");
            router.push("/login");
          }
        });
      };

      return { submit, state };
    },
  };
</script>
>
