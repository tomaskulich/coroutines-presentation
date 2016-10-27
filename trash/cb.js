const url1 = null
const url2 = null
const url3 = null
const fetchData = null
const fetchMoreData = null
const fetchEvenMoreData = null


  fetchData(url1, (err, data1) => {
    if (err != null) {
      console.error(err)
    } else {
      fetchMoreData(url2, (err, data2) => {
        if (err != null) {
          console.error(err)
        } else {
          fetchEvenMoreData(url3, (err, data3) => {
            if (err != null) {
              console.error(err)
            } else {
              // do something with data
            }
          })
        }
      })
    }
  })


