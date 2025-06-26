/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let seen=new Set()
     for(let item of nums){
        if (seen.has(item)){
            return true
        }
        else{seen.add(item)
        }
     }
  return false
};