// Tower of Hanoi
function Hanoi(h, from, to , by){
  if (h===0) return;
  Hanoi(h-1, from, by , to);
  console.log('Move disk from Tower ', from, ' to Tower ', to)
  Hanoi(h-1, by, to , from);
}
Hanoi(5,'a','c','b')
// iterative Functions
