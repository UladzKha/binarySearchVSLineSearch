class Search {
    public main() {
        let arr: Array<number> = []

        for (let i = 0; i < 10000000; i++) {
            arr.push(i);
        }

        console.time('binary search');
        console.log(this.binarySearch(arr, 9999999));
        console.timeEnd('binary search');
        console.time('regular search');
        this.regularSearch(arr, 9999999);
        console.timeEnd('regular search');
    }

    regularSearch(arr: Array<number>, num: number) {
        arr.forEach(x => {
            if (x == num) {
                return true;
            }
        });

        return false;
    }

    binarySearch(arr: Array<number>, num: number) {
        let left: number = 0;
        let right: number = arr.length - 1;
        let mid = Math.round((left + right) / 2)

        if (num < arr[left] || num > arr[right]) {
            return false;
        }

        while (left <= right) {
            if (num == arr[left] || num == arr[mid] || num == arr[right]) {
                return true;
            } else if (num < arr[left] || num > arr[right]) {
                return false;
            } else if (num > arr[left] && num < arr[mid]) {
                right = mid - 1;
                left += 1;
                mid = Math.round((left + right) / 2);


            } else if (num > arr[mid] && num < arr[right]) {
                left = mid + 1;
                right -= 1;
                mid = Math.round((left + right) / 2);
            }
        }

        return false;
    }
}

const s = new Search();
s.main();

