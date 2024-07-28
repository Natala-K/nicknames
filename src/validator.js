class Validator {
  static validateUsername(username) {
    // Проверка на допустимые символы
    const validChars = /^[a-zA-Z0-9-_]+$/;
    if (!validChars.test(username)) {
      return false;
    }

    // Проверка на более трех цифр подряд
    const consecutiveDigits = /\d{4,}/;
    if (consecutiveDigits.test(username)) {
      return false;
    }

    // Проверка на недопустимые начальные и конечные символы
    const invalidStartEnd = /^[\d-_]|[\d-_]$/;
    if (invalidStartEnd.test(username)) {
      return false;
    }

    // Проверка на начальные и конечные цифры
    if (/^\d|[\d-_]$/.test(username)) {
      return false;
    }

    return true;
  }
}

export default Validator;
