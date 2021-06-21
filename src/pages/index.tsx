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
    .then(text => setResponseGQL('GQL'+ text))
    .catch((e)=> setResponseGQL('error'+e.toString()))
  },[])

  useEffect(()=>{
    fetch('/api/prisma')
    .then(res => res.text())
    .then(text => setResponse('API: '+ text))
    .catch((e)=> setResponse('error'+e.toString()))
  },[])

  return (
    <>
      <h1>Hello World</h1>
      {response && <pre>{response}</pre>}
      {responseGQL && <pre>{responseGQL}</pre>}
    </>
  )
}
