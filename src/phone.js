export default function isPhoneNumber(number) {
  number = number.replaceAll(" ", "");

  if (number.length === 13 && true) {
    if (number.startsWith("+34")) {
      return true;
    }
  }

  return false;
}
