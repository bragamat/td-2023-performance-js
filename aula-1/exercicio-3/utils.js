export const sleep = (time = 1) => new Promise(resolve => setTimeout(resolve, time * 1000))

export async function FetchDataInDB(){
  let data = []

  await sleep(6)

  for(let n=0; n<9999; n++) {
    data.push(buildItemObject(n))
  }

  return data
}


const buildItemObject = (item) => ({
  id: item,
  name: `${item}: this is item: ${item}`
})
