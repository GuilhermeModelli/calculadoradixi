function convertToHours() {
  const totalMinutes = parseInt(
    document.getElementById('totalMinutes').value,
    10
  )

  if (isNaN(totalMinutes) || totalMinutes < 0) {
    document.getElementById('resulthours').textContent =
      'Por favor, insira um número de minutos válido.'
    return
  }

  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  document.getElementById(
    'resulthours'
  ).textContent = `Total: ${hours} horas e ${minutes} minutos`
}

function convertToMinutes() {
  const totalHours = parseInt(document.getElementById('totalHours').value, 10)

  if (isNaN(totalHours) || totalHours < 0) {
    document.getElementById('resultminutes').textContent =
      'Por favor, insira um número de horas válido.'
    return
  }

  const totalMinutes = totalHours * 60

  document.getElementById(
    'resultminutes'
  ).textContent = `Total: ${totalMinutes} minutos`
}

function addTime() {
  const hoursAdd = parseInt(document.getElementById('hoursAdd').value, 10) || 0
  const minutesAdd =
    parseInt(document.getElementById('minutesAdd').value, 10) || 0

  const totalMinutesAdd = hoursAdd * 60 + minutesAdd

  const hours = Math.floor(totalMinutesAdd / 60)
  const minutes = totalMinutesAdd % 60

  document.getElementById(
    'resultAdd'
  ).textContent = `Total: ${hours} horas e ${minutes} minutos`
}

function subtractTime() {
  const hoursSub = parseInt(document.getElementById('hoursSub').value, 10) || 0
  const minutesSub =
    parseInt(document.getElementById('minutesSub').value, 10) || 0

  const totalMinutesSub = hoursSub * 60 + minutesSub

  const totalMinutesBase = 0

  let resultMinutes = totalMinutesBase - totalMinutesSub

  if (resultMinutes < 0) {
    document.getElementById('resultSub').textContent =
      'Tempo inválido. Resultado não pode ser negativo.'
    return
  }

  const hours = Math.floor(resultMinutes / 60)
  const minutes = resultMinutes % 60

  document.getElementById(
    'resultSub'
  ).textContent = `Total: ${hours} horas e ${minutes} minutos`
}
