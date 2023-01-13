import moment from "moment";
import Vue from "vue";

//Formart Price
Vue.filter("formatPrice", function (value) {
  let formatter = new Intl.NumberFormat({
    style: "currency",
    currency: "VND",
  }).format(value);

  return formatter;
});

//Formart Date
Vue.filter("formatDate", function (value) {
  if (value) {
    return moment(String(value)).format("DD [Th]MM");
  }
});
