export function formaterDateHeure(iso) {
  const d = new Date(iso);
  return d.toLocaleString("fr-CH", {
    weekday: "short", day: "2-digit", month: "short",
    hour: "2-digit", minute: "2-digit"
  });
}

export function getQueryParam(nom) {
  const url = new URL(window.location.href);
  return url.searchParams.get(nom);
}
