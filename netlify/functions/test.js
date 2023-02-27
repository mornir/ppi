const BUILD_HOOK =
  'https://api.netlify.com/build_hooks/63fc80035ecd560b46022a4b'

const handler = async () => {
  await fetch(BUILD_HOOK, {
    method: 'POST',
  }).then((response) => {
    console.log('Build hook response:', response)
  })

  return {
    statusCode: 200,
  }
}

export { handler }
