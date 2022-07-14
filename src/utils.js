export const smg = () => {
    const resolveBanks = require.context(
      '',
      true,
      /\.js$/
    )

    console.log(resolveBanks)
}
