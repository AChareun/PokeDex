function startUpperCase(string) {
  const first = string.substr(0, 1);
  const rest = string.substr(1);
  const capital = first.toUpperCase();
  return capital.concat(rest);
}

function noKebabCase(string) {
  const $string = string.replace('-', ' ');
  return $string;
}

export function stringModification(string) {
  let $string = string;
  $string = startUpperCase($string);
  $string = noKebabCase($string);
  return $string;
}

export function inputModification(string) {
  let $string = string.trim();
  $string = $string.toLowerCase();
  return $string;
}
