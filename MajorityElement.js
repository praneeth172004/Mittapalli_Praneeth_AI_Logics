let nums=[2,2,1,1,2,2];
let count=0;
let val=-1;
for(let i=0;i<nums.length;i++){
    if(val!=nums[i]){
        val=nums[i];
        count--;
    }
    if(val==nums[i]){
        count++;
    }
}
console.log(val);