const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i],i,collection)
        }
      } else {
        for (const key in collection) {
          callback(collection[key],key,collection)
        }
      }
      return collection
    },

    map: function(collection,callback) {
      const result = []
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          result.push(callback(collection[i],i,collection))
        }
      } else {
        for (const key in collection) {
          result.push(callback(collection[key],key,collection))
        }
      }
      return result
    },

    reduce: function(collection,callback,acc) {
      for (const element of collection) {
        if (acc) {
          acc = callback(acc,element,collection)
        } else {
          acc = element
        }
      }
      return acc
    },

    find: function(collection,predicate) {
      for (const element of collection) {
        if (predicate(element)) {
          return element
        }
      }
      return undefined
    },

    filter: function(collection,predicate) {
      const result = []
      for (const element of collection) {
        if (predicate(element)) {
          result.push(element)
        }
      }
      return result
    },

    size: function(collection) {
      let result = 0
      for (const element in collection) {
        result++
      }
      return result
    },

    first: function(collection,n=1) {
      const result = []
      for (let i=0; i<n; i++) {
        result.push(collection[i])
      }
      return n === 1 ? result[0] : result
    },

    last: function(collection,n=1) {
      const result = []
      for (let i=1; i<=n; i++) {
        result.unshift(collection[collection.length-i])
      }
      return n === 1 ? result[0] : result
    },

    compact: function(array) {
      const result = []
      for (const element of array) {
        if (element) {
          result.push(element)
        }
      }
      return result
    },

    sortBy: function(array,callback) {
      array = [...array]
      return array.sort((a,b) => callback(a) - callback(b))
    },

    flatten: function(array,shallow=false) {
      const result = []
      for (const element of array) {
        if (Array.isArray(element)) {
          for (const element2 of shallow ? element : this.flatten(element)) {
            result.push(element2)
          }
        } else {
          result.push(element)
        }
      }
      return result
    },

    uniq: function(array,isSorted=false,callback=undefined) {
      if (!callback) {
        callback = x => x
      }
      const comparisonArray = []
      const result = []
      for (let i=0; i<array.length; i++) {
        if (isSorted) {
          if (i === 0 || callback(array[i]) !== callback(array[i-1])) {
            result.push(array[i])
          }
        } else {
          if (!comparisonArray.includes(callback(array[i]))) {
            result.push(array[i])
            comparisonArray.push(callback(array[i]))
          }
        }
      }
      return result
    },

    keys: function(object) {
      const result = []
      for (const key in object) {
        result.push(key)
      }
      return result
    },

    values: function(object) {
      const result = []
      for (const key in object) {
        result.push(object[key])
      }
      return result
    },

    functions: function(object) {
      const result = []
      for (const key in object) {
        if (typeof object[key] === 'function') {
          result.push(key)
        }
      }
      return result
    }

  }

})()

fi.libraryMethod()