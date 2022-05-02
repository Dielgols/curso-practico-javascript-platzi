const coupons = [
  "Coupon1",
  "Coupon2",
  "Coupon3"
];

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  
  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  let descuento;

  switch(couponValue) {
    case coupons[0]: // "Coupon1"
      descuento = 15;
    break;
    case coupons[1]: // "Coupon2"
      descuento = 30;
    break;
    case coupons[2]: // "Coupon3"
      descuento = 25;
    break;
  }
  
  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}