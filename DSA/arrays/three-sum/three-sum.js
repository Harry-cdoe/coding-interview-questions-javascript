function threeSumBrute(nums) {
    const result = [];
    const n = nums.length;

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                    const key = triplet.join(',');
                    if (!result.some(t => t.join(',') === key)) {
                        console.log(`Found triplet (Brute): [${triplet}]`);
                        result.push(triplet);
                    }
                }
            }
        }
    }
    return result;
}

function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b); // Sort first
    console.log(`Sorted array: [${nums}]`);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                console.log(`Found triplet (TwoPointer): [${nums[i]},${nums[left]},${nums[right]}]`);
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}

module.exports = { threeSum, threeSumBrute };
