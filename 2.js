function canBePalidrom(str)
{
    let chars = new Map;
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (char in chars) {
            chars[char] += 1;
        } else {
            chars[char] = 1;
        }
    }
    
    let oddCount = 0;
    for (let [key, value] of Object.entries(chars)) {
        if(value % 2 != 0) {
            oddCount += 1;
        }
    }

   return str.length % 2 == oddCount;
}

if (canBePalidrom("abab")) 
{
    console.log("Yes");
}
else 
{
    console.log("No");
}