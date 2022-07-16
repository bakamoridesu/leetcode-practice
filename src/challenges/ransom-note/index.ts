function spliceStringByIndex (str: string, index: number) {
    return str.slice(0, index) + str.slice(index + 1)
}

function canConstruct(ransomNote: string, magazine: string): boolean {
    for (let char of ransomNote) {
        const charIndex = magazine.indexOf(char)
        if(charIndex !== -1) {
            magazine = spliceStringByIndex(magazine, charIndex)
        } else {
            return false
        }
    }
    return true
}

export default canConstruct


//slightly slower but better memory usage
// function canConstruct(ransomNote: string, magazine: string): boolean {
//     const magazineArr = magazine.split('')
//     for (let char of ransomNote) {
//         const charIndex = magazineArr.indexOf(char)
//         if(charIndex !== -1) {
//             magazineArr.splice(charIndex, 1)
//         } else {
//             return false
//         }
//     }
//     return true
// }
