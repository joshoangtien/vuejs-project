<template>
  <div class="introduce">
    <div class="introduce__banner">
      <div class="introduce__banner--img">
        <img src="@/assets/images/introduce__img.png" alt="logo" />
      </div>

      <div class="introduce__banner--content">
        <h3>Giới thiệu</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde
          beatae non fugit tempore optio. Sapiente, neque consequatur? Amet,
          culpa iusto enim sit ex mollitia similique deleniti minima obcaecati
          nam cum, error at. Vel, maiores voluptatibus nulla itaque nihil cum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde
          beatae non fugit tempore optio. Sapiente, neque consequatur? Amet,
          culpa iusto enim sit ex mollitia similique deleniti minima obcaecati
          nam cum, error at. Vel, maiores voluptatibus nulla itaque nihil cum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde
          beatae non fugit tempore optio. Sapiente, neque consequatur? Amet,
          culpa iusto enim sit ex mollitia similique deleniti minima obcaecati
          nam cum, error at. Vel, maiores voluptatibus nulla itaque nihil cum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde
          beatae non fugit tempore optio. Sapiente, neque consequatur? Amet,
          culpa iusto enim sit ex mollitia similique deleniti minima obcaecati
          nam cum, error at. Vel, maiores voluptatibus nulla itaque nihil cum!
        </p>
      </div>
    </div>

    <div class="introduce__content">
      <div class="content__child">
        <div class="content__child--icon">
          <img src="@/assets/images/icon__introduce/icon1.png" alt="" />
        </div>

        <div class="content__child--text">
          <h3>Miễn phí giao hàng</h3>
          <p>
            Tại đây,mỗi một dòng chữ,mỗi chi tiết và hình ảnh đều là những bằng
            chứng mang dấu ấn lịch sử Converse 100 năm,và đang không ngừng phát
            triển lớn mạnh
          </p>
        </div>
      </div>

      <div class="content__child">
        <div class="content__child--icon">
          <img src="@/assets/images/icon__introduce/icon2.png" alt="" />
        </div>

        <div class="content__child--text">
          <h3>Đổi trả trong vòng 7 ngày</h3>
          <p>
            Tại đây,mỗi một dòng chữ,mỗi chi tiết và hình ảnh đều là những bằng
            chứng mang dấu ấn lịch sử Converse 100 năm,và đang không ngừng phát
            triển lớn mạnh
          </p>
        </div>
      </div>

      <div class="content__child">
        <div class="content__child--icon">
          <img src="@/assets/images/icon__introduce/icon3.png" alt="" />
        </div>

        <div class="content__child--text">
          <h3>Sản phẩm mới 100%</h3>
          <p>
            Tại đây,mỗi một dòng chữ,mỗi chi tiết và hình ảnh đều là những bằng
            chứng mang dấu ấn lịch sử Converse 100 năm,và đang không ngừng phát
            triển lớn mạnh
          </p>
        </div>
      </div>

      <div class="content__child">
        <div class="content__child--icon">
          <img src="@/assets/images/icon__introduce/icon4.png" alt="" />
        </div>

        <div class="content__child--text">
          <h3>Chăm sóc khách hàng</h3>
          <p>
            Tại đây,mỗi một dòng chữ,mỗi chi tiết và hình ảnh đều là những bằng
            chứng mang dấu ấn lịch sử Converse 100 năm,và đang không ngừng phát
            triển lớn mạnh
          </p>
        </div>
      </div>

      <div class="content__child">
        <div class="content__child--icon">
          <img src="@/assets/images/icon__introduce/icon5.png" alt="" />
        </div>

        <div class="content__child--text">
          <h3>Hàng chính hãng</h3>
          <p>
            Tại đây,mỗi một dòng chữ,mỗi chi tiết và hình ảnh đều là những bằng
            chứng mang dấu ấn lịch sử Converse 100 năm,và đang không ngừng phát
            triển lớn mạnh
          </p>
        </div>
      </div>

      <div class="content__child">
        <div class="content__child--icon">
          <img src="@/assets/images/icon__introduce/icon6.png" alt="" />
        </div>

        <div class="content__child--text">
          <h3>Thanh toán đa dạng</h3>
          <p>
            Tại đây,mỗi một dòng chữ,mỗi chi tiết và hình ảnh đều là những bằng
            chứng mang dấu ấn lịch sử Converse 100 năm,và đang không ngừng phát
            triển lớn mạnh
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduce",
};
</script>

<style lang="scss" scoped>
.introduce {
  width: 1270px;
  margin: 0 auto;
  padding: 100px 0;

  &__banner {
    display: flex;

    .introduce__banner--img {
      width: 50%;
      img {
        width: 100%;
      }
    }

    .introduce__banner--content {
      width: 50%;
      h3 {
        font-size: 28px;
        font-weight: 400;
        color: #a7a4a4;
        margin-bottom: 20px;
      }

      p {
        font-size: 20px;
        line-height: 30px;
        color: #817f7f;
        margin: 20px 0;
      }
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 50px 0;
    padding: 0 35px;

    .content__child {
      margin: 30px 0;
      width: calc(100% / 2 - 50px);
      display: flex;
      justify-content: space-between;

      .content__child--icon {
        width: 10%;

        img {
          width: 100%;
        }
      }

      .content__child--text {
        width: calc(90% - 30px);
        margin-left: 15px;

        h3 {
          font-size: 24px;
        }

        p {
          margin: 10px 0;
          font-size: 18px;
          line-height: 30px;
          word-break: break-word;
        }
      }
    }
  }
}
</style>
