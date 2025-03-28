// artificial delay
export const timeout = () => {
  return new Promise<void>((resolve) => {
    setTimeout(
      () => resolve(),
      Math.floor(Math.random() * (2500 - 500 + 1)) + 500,
    )
  })
}
