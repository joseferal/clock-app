function rotarManecillas() {
	var now = new Date();
	var horas = now.getHours();
	var minutos = now.getMinutes();
	var segundos = now.getSeconds();

	document.getElementById('hora').style.transform = 'rotate(' + (horas * 30) + 'deg)';
	document.getElementById('minutos').style.transform = 'rotate(' + (minutos * 6) + 'deg)';
	document.getElementById('segundos').style.transform = 'rotate(' + (segundos * 6) + 'deg)';

	var diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
	var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

	document.getElementById('dia').textContent = 'Hoy es ' + diaSemana[now.getDay()] + ' ' + now.getDate() + ' de ' + meses[now.getMonth()] + ' del ' + now.getFullYear();

}

setInterval(rotarManecillas, 1000);