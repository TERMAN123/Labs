function moveCount(numbers)
{
    let moves = 0;
    for (let i = 1; i < numbers.length; i++) 
    {
         if(numbers[i] <= numbers[i - 1])
         {
            let move = (numbers[i - 1] - numbers[i] + 1);
            numbers[i] += move;
            moves += move;
         }
    }
    return moves;
}
    
console.log(moveCount([1,10,2,6])); //15