function sortedFrequency(arr, num) {

    function findFirstOccurrence(target) {
        let left = 0;
        let right = arr.length - 1;
        let result = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                result = mid;
                right = mid - 1;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }

    function findLastOccurrence(target) {
        let left = 0;
        let right = arr.length - 1;
        let result = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                result = mid;
                left = mid + 1;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }

    const firstOccurrence = findFirstOccurrence(num);

    if (firstOccurrence === -1) {
        return -1;
    }

    const lastOccurrence = findLastOccurrence(num);

    return lastOccurrence - firstOccurrence + 1;
}

