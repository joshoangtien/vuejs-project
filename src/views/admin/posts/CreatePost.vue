<template>
  <form @submit="handleSubmit">
    <div class="content_head">
      <h2>Thêm mới bài viết</h2>
    </div>

    <div class="form_add_post">
      <div class="column_left">
        <BaseInput
          maxlength="255"
          type="text"
          label="Tiêu đề bài viết"
          v-model="postName"
          :isError="titleErrorMessage != ''"
          :messageError="titleErrorMessage"
        />

        <div class="upload_image">
          <div class="upload_input">
            <h4>Ảnh bài viết</h4>
            <input
              type="file"
              accept="image/*"
              @change="previewImage"
              class="form-control-file"
              id="my-file"
            />
          </div>

          <img
            v-if="preview"
            :src="preview"
            class="img-fluid"
            width="250px"
            alt="image upload"
          />
        </div>
      </div>

      <div class="column_right">
        <div class="content_post">
          <h4>Nội dung bài viết</h4>
          <textarea v-model="contentPost" maxlength="1000"></textarea>
          <span>Error</span>
        </div>
      </div>
    </div>

    <BaseButton type="submit" text="Thêm mới" typeButton="button-add" />
  </form>
</template>

<script>
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import ImgDefault from "@/assets/images/image-default.png";
export default {
  name: "CreatePostPage",
  props: {
    messageError: String,
  },
  components: {
    BaseInput,
    BaseButton,
  },
  data: function () {
    return {
      preview: ImgDefault,
      image: null,
      postName: "",
      contentPost: "",
    };
  },
  computed: {
    titleErrorMessage() {
      if (!this.postName) return "Yêu cầu nhập tiêu đề bài viết";
      return "";
    },
  },
  methods: {
    handleSubmit: function (e) {
      e.preventDefault();
      this.$children.forEach((ele) => (ele.focus = false));
    },

    previewImage: function (event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        };
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
};
</script>

<style lang="scss">
.content_head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.form_add_post {
  font-family: Roboto;
  display: flex;
  gap: 40px;
  margin: 40px 10px;

  .column_left {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 50%;

    h4 {
      font-size: 16px;
      font-weight: bold;
    }

    .upload_image {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .upload_input {
        display: flex;
        flex-direction: column;
        gap: 16px;

        input {
          cursor: pointer;
          width: 300px;
        }
      }

      .img-fluid {
        box-shadow: 0 3px 10px rgb(0, 0, 0 / 0.2);
      }
    }
  }

  .column_right {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 50%;

    .content_post {
      textarea {
        padding: 4px;
        resize: none;
        width: 100%;
        height: 500px;

        &.is-error {
          border: 1px solid red;
        }
      }
    }
  }
}

span {
  color: red;
}
</style>
