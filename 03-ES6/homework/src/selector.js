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


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0] === '#') return 'id';
  else if (selector[0] === '.') return 'class';
  else if (selector.includes('.')) return "tag.class";
  else return 'tag'
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = function (e) {
      let aux = selector.slice(1);
      let idAux = e.id
      return aux == idAux;
    }
  } else if (selectorType === "class") {
    matchFunction = function (e) {
      let aux = selector.slice(1);
      let classAux = e.className
      let clases = classAux.split(' ')
      for(let key in clases){
        if (clases[key] === aux)return true;
      }
      return false
    }

  } else if (selectorType === "tag.class") {
    matchFunction = function (e) {
      let elements = selector.split('.')
      let newElement = e.className.split(' ')
      if(elements[0] === e.tagName.toLowerCase()){
        for(let values in newElement){
          if(newElement[values] === elements[1]){
            return true
          }
        }
      }
      return false
    }
  } else if (selectorType === "tag") {
    matchFunction = function (e) {
      return e.tagName.toLowerCase() === selector.toLowerCase()
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
