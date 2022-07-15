export class ListNode {
    val: number
    next: ListNode | null
    counter: number

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
        this.counter = 0;
    }

    toString(): string {
        let result = this.val + '';
        if(this.next) result += this.toString.call(this.next)
        return result
    }
}

function listNodeToArray (node: ListNode | null): number[] {
    let currentNode = node;
    const result = []
    while(currentNode) {
        result.push(currentNode.val)
        currentNode = currentNode.next
    }
    return result;
}

function isPalindrome(head: ListNode | null): boolean {
    const convertedToArray = listNodeToArray(head);
    let length = convertedToArray.length
    for (let i = 0; i < length / 2; i++) {
        if(convertedToArray[i] !== convertedToArray[length-1-i]) return false
    }
    return true;
}

export default isPalindrome
