
const url1 = null
const url2 = null
const url3 = null
const fetchData = null
const fetchMoreData = null
const fetchEvenMoreData = null


  async function main() {
    try {
      let data1 = await fetchData(url1)
      let data2 = await fetchMoreData(url2)
      let data3 = await fetchEvenMoreData(url3)
    } catch (e) {
      console.error(e)
    }
  }


