<template>
  <div class="slogan">
    <div class="slogan__img">
      <img src="@/assets/images/footer_img.jpg" alt="" />
    </div>
    <div class="slogan__background"></div>
    <div class="slogan__title container">
      <h6>
        Giày thể thao chưa bao giờ là lỗi thời <br />
        Đang giảm giá 50%
      </h6>
      <router-link to="/sale-products">
        <button>Bắt đầu mua sắm</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slogan",
};
</script>

<style lang="scss" scoped>
.slogan {
  width: 100%;
  position: relative;
  margin-top: 30px;
  background-color: white;

  .slogan__background {
    background-color: black;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 98.5%;
  }

  .slogan__img img {
    width: 100%;
  }
  .slogan__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    position: absolute;
    top: 35%;
    left: 8%;
    h6 {
      font-size: 35px;
      font-weight: 600;
      background: transparent;
      letter-spacing: 0;
      color: white;
    }

    button {
      cursor: pointer;
      margin-right: 10%;
      background: transparent;
      color: white;
      font-size: 16px;
      line-height: 21px;
      border-radius: 5px;
      border: 1px solid #dfdfdf;
      width: 224px;
      height: 56px;
    }

    button:hover {
      color: black;
      background: white;
      transition: 0.4s ease-in-out;
    }
  }
}
</style>
