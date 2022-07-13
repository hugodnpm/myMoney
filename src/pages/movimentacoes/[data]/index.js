import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Rest from '../../../utils/rest'
import Header from '../../../elements/Header'

const baseURL = 'https://mymoney-v1-default-rtdb.firebaseio.com/mymoney/'
const { useGet } = Rest(baseURL)

const Movimentacoes = () => {
  const router = useRouter()
  const mes = router.query.data
  const data = useGet(`movimentacoes/${mes}`)
  useEffect(() => {
    console.log('mudou', mes)
  }, [mes])
  //const data = useGet(`movimentacoes/${teste}`)
  return (
    <div className="container">
      <Header />
      <h1>Movimentações</h1>
      <table className="table">
        <thead>
          <tr>
            <th>descrição</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {data.data &&
            Object.keys(data.data).map((movimentacao) => {
              return (
                <tr>
                  <td>{data.data[movimentacao].descricao}</td>
                  <td>{data.data[movimentacao].valor}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}
export default Movimentacoes
