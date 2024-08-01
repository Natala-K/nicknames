class Validator {
  static validateUsername(username) {
    // Регулярное выражение для проверки всех условий одновременно
    const regex = /^(?!.*[_-]{2})(?!.*\d{4})(?!^[\d_-])(?!.*[\d_-]$)[a-zA-Z0-9-_]+$/;
    return regex.test(username);
  }
}

export default Validator;
