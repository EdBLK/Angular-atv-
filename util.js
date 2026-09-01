export function calcularMediaPonderada(lista) {
  const somaPonderada = lista.reduce((acc, item) => acc + (item.nota * item.ch), 0);
  const totalCH = lista.reduce((acc, item) => acc + item.ch, 0);
  return somaPonderada / totalCH;
}