function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeAPagar = 100 - descuento;
    const precioConDescuento = (precio * porcentajeAPagar) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
   
    const precioFinal = calcularPrecioConDescuento(priceValue, discountValue);

    const ResultPrice = document.getElementById("ResultPrice");
    ResultPrice.innerText = "El precio con descuento es $" + precioFinal;
}

const coupons = [
    "Steph15",
    "SantiM30",
    "Jus25"
];

function buttonPriceCouponDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + "no es válido");
        } else if (couponValue === "Steph15") {
            descuento = 15;
        } else if (couponValue === "SantiM30") {
            descuento = 30;
        } else if (couponValue === "Jus25") {
            descuento = 25;
        }

    const precioFinal = calcularPrecioConDescuento(priceValue, descuento);

    const ResultPrice = document.getElementById("ResultCouponPrice");
    ResultPrice.innerText = "El precio con descuento es $" + precioFinal;
}

