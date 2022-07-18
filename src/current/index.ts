function kWeakestRows(mat: number[][], k: number): number[] {
  return mat.map((row: number[], index: number) =>
    row.reduce((acc, curr) => acc + curr,0) * 1000 + index
  ).sort(
    (a: number, b: number) => a - b
  ).slice(0, k).map(
    (el: number) => el >= 1000 ? el % 1000 : el
  )
}

export default kWeakestRows
