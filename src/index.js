let fi = (function() {
  return {

    each: function(list, iteratee) {
      if (Array.isArray(list))  {
        for (let i = 0; i < list.length; i++) {
          iteratee(list[i])
        }
      } else if (typeof(list) === 'object') {
        for (let key in list) {
          iteratee(list[key])
        }
      }
      return list
    },

    map: function(list, iteratee) {
      let newArray = []
      if (Array.isArray(list)) {
        return list.map(iteratee)
      } else if (typeof(list) === 'object') {
        for (let key in list) {
          newArray.push(iteratee(list[key]))
        }
        return newArray
      }
    },

    reduce: function(list, iteratee,memo) {
      for (let i = 0; i < list.length; i++) {
        memo = iteratee(memo, list[i])
      }
      return memo
    },

    find: function(list, predicate) {
      for (let i = 0; i < list.length; i++) {
        if (predicate(list[i]) === true) {
          return list[i]
        }
      }
      return undefined
    },

    filter: function(list, predicate) {
      let newArray = []
      for (let i = 0; i < list.length; i++) {
        if (predicate(list[i]) === true){
          newArray.push(list[i])
        }
      }
      return newArray
    },

    size: function(list) {
      if (Array.isArray(list)) {
        return list.length
      } else if (typeof(list) === 'object'){
        return Object.values(list).length
      }
    },

    first: function(array, n) {
      if (n) {
        return array.slice(0, n)
      }
      return array[0]
    },

    last: function(array, n) {
      if (n) {
        return array.slice(-n)
      }
      return array[array.length - 1]
    },

    compact: function(array) {
      let newArray = []
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          newArray.push(array[i])
        }
      }
      return newArray
    },

    sortBy: function(array, iteratee) {
      let newArray = array.slice()
      for (let i = 0; i < array.length; i++) {
        return newArray.sort(function(a, b) {return iteratee(a)-iteratee(b)})
      }
    },

    uniq: function(array) {
      let uniqArray = []
      for (let i = 0; i < array.length; i++) {
        if (!uniqArray.includes(array[i])){
          uniqArray.push(array[i])
        }
      }
      return uniqArray
    },

    keys: function(object) {
      return Object.keys(object)
    },

    values: function(object) {
      return Object.values(object)
    },

    functions: function(object) {
      return Object.getOwnPropertyNames(object)
    }

  }
})()
