import React from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../components/shared/Spinner'

const HomePage = () => {
  const { loading, error } = useSelector((state) => state.auth)
  return (
    <>
      {error && <span> {alert(error)} </span>}
      {/* {error && toast.error(error)} */}
      {loading ? (<Spinner />) : (
        <h1>Home page</h1>
      )}
    </>
  )
}

export default HomePage
