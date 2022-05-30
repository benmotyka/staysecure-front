import GlobalLoader from 'components/Loader/GlobalLoader'
import React from 'react'
import { useGlobalLoader } from 'store/actions/global'

const GlobalLoaderContext = ({children}) => {
  const { loaderStatus } = useGlobalLoader()
  return (
    <>
    {loaderStatus ? <GlobalLoader/> : children}
    </>
  )
}

export default GlobalLoaderContext