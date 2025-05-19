export function addComas(x: number): string {
    return x.toString().replace(/(?<=\d)(?=(?:\d{3})+(?!\d))/g, " ");
}
