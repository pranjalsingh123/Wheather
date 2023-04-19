const celsiusinput=document.querySelector('#celsius>input');
const fahrenheitinput=
document.querySelector('#fahrenheit>input');
const kelvininput=
document.querySelector('#kelvin>input');
const roundToTwoDp=(num)=>{
	return num.toFixed(2);
};
const celsiusToFaAndKe=()=>{
	const celsiusTemp=
	parseFloat(celsiusinput.value);
	const fahrenheitTemp=(celsiusTemp * 1.8)+32;
	const kelvinTemp=celsiusTemp+273.15;
	fahrenheitinput.value=roundToTwoDp(fahrenheitTemp);
	kelvininput.value=roundToTwoDp(kelvinTemp);
};
const fahrenheitToCeAndKe=()=>{
	const fahrenheitTemp=
	parseFloat(fahrenheitinput.value);
	const celsiusTemp=(fahrenheitTemp-32)*(5/9);
	const kelvinTemp=(fahrenheitTemp+459.67)*(5/9);
	celsiusinput.value=
	roundToTwoDp(celsiusTemp);
	kelvininput.value=roundToTwoDp(kelvinTemp);
};
 const kelvinToCeAndFa=()=>{
 	 const kelvinTemp=
 	 parseFloat(kelvininput.value);
 	 const celsiusTemp=kelvinTemp-273;
 	 const fahrenheitTemp=1.8 * (kelvinTemp-273)+32;
 	 celsiusinput.value=roundToTwoDp(celsiusTemp);
 	 fahrenheitinput.value=roundToTwoDp(fahrenheitTemp);
 };
 const main=()=>{
 	 celsiusinput.addEventListener('input',celsiusToFaAndKe);
 	 fahrenheitinput.addEventListener('input',fahrenheitinputToFaAndKe);
 	 kelvininput.addEventListener('input',kelvinToCeAndFa);
 };

main();







