function findRotationCount(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        // If the array is already sorted, the rotation count is 0
        if (arr[start] <= arr[end]) {
            return start;
        }

        let mid = Math.floor((start + end) / 2);
        let next = (mid + 1) % arr.length; // Calculate the next element index

        // Check if the current element is greater than the next element
        if (arr[mid] > arr[next]) {
            return next; // Rotation count is found at the next index
        }

        // Adjust the search range based on the rotation property
        if (arr[start] <= arr[mid]) {
            start = mid + 1; // Search in the right half
        } else {
            end = mid - 1; // Search in the left half
        }
    }

    return 0; // Default case when the array is not rotated
}

