import { ReactElement, useEffect, useState } from "react"

export default function IndexPage(): ReactElement {

  const [response, setResponse] = useState<string|null>("API waiting")
  const [responseGQL, setResponseGQL] = useState<string|null>("GQL waiting")


  useEffect(()=>{
    fetch('/api/graphql',{
      method: 'POST',
      body: JSON.stringify({query:`query{users{id name}}`})
    })
    .then(res => res.text())
    .then(text => setResponseGQL(text))
    .catch((e)=> setResponseGQL('error'+e))
  },[])

  useEffect(()=>{
    fetch('/api/prisma')
    .then(res => res.text())
    .then(text => setResponse(text))
    .catch((e)=> setResponse('error'+e))
  },[])

  return (
    <>
      <h1>Hello World</h1>
      {response && <pre>{response}</pre>}
    </>
  )
}
