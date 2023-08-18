/**
 * Comprueba si el número de cédula ingresado es valido.
 * @param  {string|integer}  ci Número de cédula
 * @return {Boolean}
 */
function isValidCI(ci) {
  var isNumeric = true;
  var total = 0,
    individual;

  for (var position = 0; position < 10; position++) {
    // Obtiene cada posición del número de cédula
    // Se convierte a string en caso de que 'ci' sea un valor numérico
    individual = ci.toString().substring(position, position + 1);

    if (isNaN(individual)) {
      isNumeric = false;
      break;
    } else {
      // Si la posición es menor a 9
      if (position < 9) {
        // Si la posición es par, osea 0, 2, 4, 6, 8.
        if (position % 2 === 0) {
          // Si el número individual de la cédula es mayor a 5
          if (parseInt(individual) * 2 > 9) {
            // Se duplica el valor, se obtiene la parte decimal y se aumenta uno
            // y se lo suma al total
            total += 1 + (parseInt(individual) * 2) % 10;
          } else {
            // Si el número individual de la cédula es menor que 5 solo se lo duplica
            // y se lo suma al total
            total += parseInt(individual) * 2;
          }
        } else {
          // Si la posición es impar (1, 3, 5, 7)
          // Se suma el número individual de la cédula al total
          total += parseInt(individual);
        }
      }
    }
  }

  if (total % 10 !== 0) {
    total = (total - (total % 10) + 10) - total;
  } else {
    total = 0;
  }

  if (isNumeric) {
    // La cédula debe contener al menos 10 dígitos.
    if (ci.toString().length !== 10) {
      return false;
    }

    // El número de cédula no debe ser cero.
    if (parseInt(ci, 10) === 0) {
      return false;
    }

    // El total debe ser igual al último número de la cédula.
    if (total !== parseInt(individual)) {
      return false;
    }

    // Cédula válida
    return true;
  }

  // Si no es un número.
  return false;
}

export function validarNumeroPasaporte(numeroPasaporte) {
  // Definir el formato permitido (este es un ejemplo genérico)
  const formatoPermitido = /^[A-Z0-9]+$/;

  // Definir las reglas de longitud y otras validaciones según el país
  const longitudPermitida = 9; // Por ejemplo, 9 caracteres
  const letrasPermitidas = /^[A-Z]+$/; // Por ejemplo, solo letras mayúsculas al inicio

  // Verificar longitud y formato permitido
  if (numeroPasaporte.length !== longitudPermitida || !formatoPermitido.test(numeroPasaporte)) {
      return false;
  }

  // Verificar letras iniciales
  if (!letrasPermitidas.test(numeroPasaporte.substring(0, 1))) {
      return false;
  }

  // Otras validaciones específicas podrían agregarse aquí

  // Si pasó todas las validaciones, retorna true
  return true;
}

export default isValidCI;
