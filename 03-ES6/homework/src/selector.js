var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) { //.container
  // tu código aquí
  // si me pasaron un string con un # => return "id"
  // si me pasaron un string con un . => return "class"
  // si me pasaron un string con un 'nada' => return "tag"
  // si me pasaron un string con un  'nada.algo' => return "tag" (tag class)
   if(selector[0]=== '.') return 'class'
   if(selector[0]==='#') return 'id'
   if(selector.includes('.')) return 'tag.class'  // incluide() devuelve true o false
   return 'tag';
  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

const matchFunctionMaker = function(selector) { // .container
  const selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === 'id') { 
   matchFunction=(element)=>{
    if(selector==='#'+ element.id) return true
    return false
   }
  } else if (selectorType === "class") {
    matchFunction=(element)=>{
      for(const cls of element.classList){
      if(selector==='.'+ cls) return true
      }
      return false;
     }
    
  } else if (selectorType === "tag.class") {
    matchFunction=(element)=>{
      const [tag, cls] = selector.split('.')  
      
    }
    
  } else if (selectorType === "tag") {
    matchFunction=(element)=>{
      if(selector===element.tagName.toLowerCase()){
        return true
      }
      return false
    }
  }
  return matchFunction;
};

const $ = function(selector) { // selector recibimos .container
  let elements// => esto será el array de elementos a retornar  ;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
