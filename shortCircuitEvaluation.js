// JS Nuggets: Short-circuit Evaluation
if ( 4 > 5 && 5 > 6 ) {
    console.log("hi")
  } else {
    console.log("no")
  }
  
  var test = true;
  var isTrue = function(){
    console.log('Test is true.');
  };
  var isFalse = function(){
    console.log('Test is false.');
  };
  
  if(test){
  //  isTrue();
  }
  
  ( test && isTrue() );
  
  
  test = false;
  if(!test){
    isFalse(); 
  }
  
  ( test || isFalse());
  
  
  
  function theSameOldFoo(name){ 
    name = name || 'Bar' ;
    console.log("My best friend's name is " + name);
  }
  theSameOldFoo(); 
  theSameOldFoo('Beau'); 