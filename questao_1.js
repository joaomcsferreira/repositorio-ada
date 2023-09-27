function converterHorario(horario) {
  let [horas, minutos, segundos] = horario.split(":")
  let periodo = horario.slice(8)

  horas = parseInt(horas)

  if (periodo === "PM" && horas !== 12) {
    horas += 12
  } else if (periodo === "AM" && horas === 12) {
    horas = 0
  }

  return `${horas.toString().padStart(2, "0")}:${minutos}:${segundos.slice(
    0,
    -2
  )}`
}

const horarios = ["06:15:25PM", "12:15:25PM", "12:15:25AM"]

horarios.forEach((horario) => console.log(converterHorario(horario)))
