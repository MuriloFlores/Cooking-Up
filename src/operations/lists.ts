export function deLista1ParaLista2(list1: unknown[], list2: unknown[]) {
    return list1.every((itemsList1) => list2.includes(itemsList1))
}
