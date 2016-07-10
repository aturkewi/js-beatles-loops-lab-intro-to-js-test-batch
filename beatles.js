var theBeatlesPlay = (musicians, instruments) => {
    var band = []
    for (var i=0; i <= musicians.length - 1 ; i++){
      band.push(`${musicians[i]} plays ${instruments[i]}`);
      // band.push("Some string");
    }
    return band;
}

var johnLennonFacts = facts => {
  new_facts = [];
  for (var i=0; i <= facts.length - 1; i++){
    new_facts.push(facts[i] + '!!!');
  }
  return new_facts
}

var iLoveTheBeatles = num =>{
  array = [];
  do{
    array.push("I love the Beatles!");
    num++;
  }while(num < 15)
  return array;
}
