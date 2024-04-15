export function formatDate(oldDate: Date) {
	const ano = oldDate.getFullYear();
	const mes = ("0" + (oldDate.getMonth() + 1)).slice(-2);
	const dia = ("0" + oldDate.getDate()).slice(-2);
	const horas = ("0" + oldDate.getHours()).slice(-2);
	const minutos = ("0" + oldDate.getMinutes()).slice(-2);
	const segundos = ("0" + oldDate.getSeconds()).slice(-2);
	const milissegundos = ("00" + oldDate.getMilliseconds()).slice(-3);
	const newDate =
		ano +
		"-" +
		mes +
		"-" +
		dia +
		"T" +
		horas +
		":" +
		minutos +
		":" +
		segundos +
		"." +
		milissegundos +
		"Z";

	return newDate;
}
