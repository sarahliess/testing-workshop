export default function isPhoneNumber(number) {
  number = number.replaceAll(" ", "");

  if (number.length === 13 && true) {
    if (number.startsWith("+5491")) {
      return true;
    }
  }

  return false;
}
