import React, { Suspense } from 'react'
import { Table, ErrorBoundary } from 'components'
import { settingsInfo } from 'utilities/constants.js'
import './styles.scss'

export default function TableContainer () {
  return <div className='table-container'>
        <ErrorBoundary>
            <Suspense fallback={<h1>Loading Customer Data...</h1>}>
                <span><i className="fa-solid fa-circle-info"></i>{settingsInfo}</span>
                <Table />
            </Suspense>
        </ErrorBoundary>
    </div>
}
