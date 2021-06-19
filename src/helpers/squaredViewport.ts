export function squaredViewport(viewport?: string): string {
  const newViewport = "0 0 512 512"
  if (viewport) {
    const explode = viewport
      .split(" ")
      .map((value) => Number(value))
      .filter((value) => !Number.isNaN(value))
    if (explode.length === 4) {
      let [xmin, ymin, xmax, ymax] = explode
      const width = xmax - xmin
      const height = ymax - ymin
      if (width > height) {
        const diff = width - height
        ymin -= diff / 2
        ymax += diff / 2
        return `${xmin} ${ymin} ${xmax} ${ymax}`
      } else if (width < height) {
        const diff = height - width
        xmin -= diff / 2
        xmax += diff / 2
        return `${xmin} ${ymin} ${xmax} ${ymax}`
      } else {
        return viewport
      }
    }
  }

  return newViewport
}
