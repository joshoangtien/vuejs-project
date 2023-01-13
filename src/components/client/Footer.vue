<template>
  <div class="footer">
    <div class="footer__main container">
      <div class="footer__main--slogan">
        <div class="logo">
          <img src="@/assets/images/logo.png" alt="" />
        </div>
        <div class="desc">
          <p>
            Chào mừng bạn đến với ngôi nhà của Tuấn Ka. Mỗi 1 dòng chữ, mỗi chi
            tiết và hình đều là những bằng chứng mang dấu ấn lịch sử bán giày
            hàng thập kỷ qua của Tuấn Ka, và đang không ngừng phát triển lớn
            mạnh.
          </p>
        </div>
      </div>

      <div class="footer__main--option">
        <h6 class="footer__main--title">Sản phẩm</h6>
        <ul>
          <li>Sản phẩm hot</li>
          <li>Tài khoản của tôi</li>
          <li>Nhà cung cấp</li>
          <li>Nhãn hiệu</li>
        </ul>
      </div>

      <div class="footer__main--policy">
        <h6 class="footer__main--title">Chính sách</h6>
        <ul>
          <li>Giấy phép</li>
          <li>Chính sách hoàn lại tiền</li>
          <li>Về chúng tôi</li>
        </ul>
      </div>

      <div class="footer__main--contact">
        <h6 class="footer__main--title">Liên hệ</h6>
        <ul>
          <li>Khu Nhà trên mây, phường Phú La, Hà Đông, Hà Nội</li>
          <li>+84 123 456 888</li>
          <li>support@tuankashop.com.vn</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: white;
  padding-bottom: 50px;

  .footer__main {
    margin: 0 auto;
    margin-top: 36px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 75px;

    .footer__main--title {
      font-size: 14px;
      // font-family: "Poppins";
      font-weight: bold;
      margin-top: 40px;
    }
    ul {
      list-style: none;
    }
    ul li {
      margin-top: 9px;
      font-size: 14px;
    }

    .footer__main--slogan {
      font-size: 16px;
      p {
        margin-top: 18px;
        letter-spacing: -0.2px;
        color: #302f2f;
        line-height: 27px;
      }
    }
    .footer__main--option {
      margin-left: 60px;
    }
  }
}
</style>
