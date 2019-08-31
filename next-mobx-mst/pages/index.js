import React from 'react'
import SampleComponent from '../components/SampleComponent'
import Head from 'next/head'

/* export default () => {
  return <SampleComponent title='Index Page' linkTo='/other' />
}
*/
export default () => (
  <div>
    <Head>
        <script type="text/javascript" src="/static/foo.js"></script>
    </Head>
    <SampleComponent title='Index Page' linkTo='/other' />
  </div>
)
