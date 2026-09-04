let nums=[2,7,11,15]
let target=9
let i=0;
let j=nums.length-1
let sum=0;
let ans=[]
while(i<j){
    sum=nums[i]+nums[j];
    //Skip the duplicate values
    if(i>0 && nums[i-1]==nums[i]){
        i++;
        continue;
    } 
    //Skip the duplicate values
    if(j<nums.length-1 && nums[j+1]==nums[j]){
        j--;
        continue;
    }
    if(sum===target){
        ans.push(i);
        ans.push(j);
        break;
    }else if(sum>target){
        j-=1;
    }else if(sum<target){
        i+=1
    }
}
console.log(ans)
// O(n) Time Complexity
// O(n) Space Complexity
