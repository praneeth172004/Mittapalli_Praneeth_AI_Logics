let nums = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let l=0;
let r=nums.length-1;
let water=-Infinity;
while(l<r){
    let ele=-1;
    //Find the Min value
    if(nums[l]<nums[r]){
        ele=nums[l];
    }else{
        ele=nums[r];
    }
    //Find the Water stored
    let val=(r-l)*(ele);
    if(water<val){
        water=val;
    }
    //Move the pointer which has the smaller value
    if(nums[l]<=nums[r]){
        l++;
    }else{
        r--;
    }
}
console.log(water)