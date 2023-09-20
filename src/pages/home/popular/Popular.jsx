import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/swicthTabs/SwitchTabs'
SwitchTabs
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'


const Popular = () => {

    const [endpoint, setEndpoint] = useState('movie')

    const { data, loading } = useFetch(`/${endpoint}/popular`)
    // console.log(data)

    const onTabChange = (tab) => {
        setEndpoint(tab === 'Movies' ? 'movie' : 'tv')
    }
    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                    <span className="carouselTitle">
                        What's Popular
                    </span>
                    <SwitchTabs data={['Movies', 'TV shows']} onTabChange={onTabChange} />
                </div>
                <Carousel  data={data?.results} loading={loading} endpoint={endpoint} />
            </ContentWrapper>
        </div>
    )
}

export default Popular
