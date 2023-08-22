const materias = {
    matematicas: ["alumno1", "alumno2", "alumno3", "alumno4"],
    programacion: ["alumno1", "alumno2", "alumno3", "alumno4"],
    logica: ["alumno1", "alumno2", "alumno3", "alumno4", "alumno5"],
    quimica: ["alumno1", "alumno2", "alumno3", "alumno4"]
}

const incripcion = (alumno, materia) => {
    if(materias[materia].length < 5) {
        materias[materia].push(alumno);
    } else {
        document.write(`La cantidad de alumnos en la materia de ${materia}
        excede los 5 alumnos. no es posible inscribirse`);
    }
}

incripcion("newalumno","quimica");