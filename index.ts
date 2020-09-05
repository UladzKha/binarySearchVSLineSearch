main()

async function main() {
    let arr: Array<number> = new Array(1000000000);

    for (let i = 0; i < 1000000; i++) {
        arr.push(i);
    }

    console.time('binary search');
    await binarySearch(arr, 99999999);
    console.timeEnd('binary search');
    console.time('regular search');
    await regularSearch(arr, 999999999);
    console.timeEnd('regular search');
}



async function regularSearch(arr: Array<number>, num: number) {
    let result: boolean = false;
    arr.forEach(x => {
        if (x == num) {
            result = true;
        }
    });

    return result;
}


async function binarySearch(arr: Array<number>, num: number) {
    let leftIndex: number = 0;
    let rightIndex: number = arr.length - 1;
    let midIndex = Math.round((leftIndex + rightIndex) / 2)

    let left: number = arr[leftIndex];
    let right: number = arr[rightIndex];
    let mid: number = arr[midIndex]


    if (num < left || num > right) {
        return false;
    }

    while (left <= right) {
        if (num == left || num == mid || num == right) {
            return true;
        } else if (num < left || num > right) {
            return false;
        } else if (num > left && num < mid) {
            rightIndex = midIndex - 1;
            leftIndex += 1;
            midIndex = Math.round((leftIndex + rightIndex) / 2);

            left = arr[leftIndex];
            right = arr[rightIndex];
            mid = arr[midIndex];
        } else if (num > mid && num < right) {
            leftIndex = midIndex + 1;
            rightIndex -= 1;
            midIndex = Math.round((leftIndex + rightIndex) / 2);

            left = arr[leftIndex];
            right = arr[rightIndex];
            mid = arr[midIndex];
        } else {
            return false;
        }

    }
}