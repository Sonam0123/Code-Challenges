def removeDuplicates(nums):
    j = 0
    for i in range(len(nums)):
        if nums[i] != nums[i+1]:
            nums[++j] = nums[i]
    return j