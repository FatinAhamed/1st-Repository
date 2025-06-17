function maxArea (height){

    let left = 0;
    let right = height.length-1;
    let maxArea = 0;

    while (left < right) {

        const width = right-left;

        const area = width*Math.min(height[left], height[right]);

        maxArea = Math.max(maxArea, area);

        if (height[left] < height[right]) {

            left++;
        }

        else

        {
            right--;
        }
        

    } 

    return maxArea;


};

const heights = [1,8,6,2,5,4,8,3,7];
console.log("Max Area:", maxArea(heights));