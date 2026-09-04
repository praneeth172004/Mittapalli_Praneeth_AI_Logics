let nums = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let l=0;
let r=nums.length-1;
let water=-Infinity;
while(l<r){
    let ele=-1;
    if(nums[l]<nums[r]){
        ele=nums[l];
    }else{
        ele=nums[r];
    }
    let val=(r-l)*(ele);
    if(water<val){
        water=val;
    }
    if(nums[l]<=nums[r]){
        l++;
    }else{
        r--;
    }
}
console.log(water)