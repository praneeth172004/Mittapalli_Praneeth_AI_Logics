let nums=2736;
nums=nums.toString().split("");
for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        //nums[i] is less than nums[j] then swap the values and return the value
        if(nums[i]<nums[j]){
            let temp=nums[i];
            nums[i]=nums[j];
            nums[j]=temp;
            console.log(parseInt(nums.join("")))
            return;
        }
    }
}
console.log(parseInt(nums.join("")))
