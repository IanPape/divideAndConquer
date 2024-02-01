function findRotatedIndex(arr, num) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === num) {
            return mid;
        }

        // Check if the left half is sorted
        if (arr[start] <= arr[mid]) {
            // Check if num is within the sorted left half
            if (arr[start] <= num && num < arr[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        // Check if the right half is sorted
        else {
            // Check if num is within the sorted right half
            if (arr[mid] < num && num <= arr[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    // If num is not found, return -1
    return -1;
}

