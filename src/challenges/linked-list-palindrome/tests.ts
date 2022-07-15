import {ListNode} from "./index";

export const testCases = [
    {
        test: new ListNode(1,
            new ListNode(2,
                new ListNode(2,
                    new ListNode(1)))),
        answer: true
    },
    {
        test: new ListNode(1,
            new ListNode(2,)),
        answer: false
    },
]
