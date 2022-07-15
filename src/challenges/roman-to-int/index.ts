import { symbolMap } from "./config";

const romanToInt = (s: string): number => {
    if(!s) return 0
    if(s.length === 1) return symbolMap[s]

    if (symbolMap[s[0]] < symbolMap[s[1]]) {
        return symbolMap[s[1]] - symbolMap[s[0]] + romanToInt(s.substring(2))
    }
    return symbolMap[s[0]] + romanToInt(s.substring(1));
}

export default romanToInt
