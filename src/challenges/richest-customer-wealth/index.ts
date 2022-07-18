function getWealth(account: number[]): number {
    return account.reduce((acc, curr) => acc + curr, 0)
}

function maximumWealth(accounts: number[][]): number {
    return accounts.map(getWealth).reduce((acc, curr) =>
        curr > acc ? curr : acc, 0)
}

export default maximumWealth
