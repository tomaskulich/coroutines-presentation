const url1 = null
const url2 = null
const url3 = null
const fetchData = null
const fetchMoreData = null
const fetchEvenMoreData = null


   let data1, data2, data3

   fetchData(url1)
   .then((result) => {
     data1 = result
     return fetchMoreData(url2)
   })
   .then((result) => {
     data2 = result
     return fetchEvenMoreData(url3)
   })
   .then((result) => {
     data3 = result
     /* do something with data */
   }).catch((e) => {
     console.error(e)
   })


