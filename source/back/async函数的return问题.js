let main = async () => {
  console.log(1)
  return "res"
  console.log(2)
}

main().then((value) => {
  console.log(value)
})

// print result
// 1
// res
