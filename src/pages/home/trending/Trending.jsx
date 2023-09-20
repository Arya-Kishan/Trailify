import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/swicthTabs/SwitchTabs'
SwitchTabs
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'


const Trending = () => {

    const [endpoint, setEndpoint] = useState('day')

    const { data, loading } = useFetch(`/trending/all/${endpoint}`)
    // console.log(data)

    const onTabChange = (tab) => {
        setEndpoint(tab === 'Day' ? 'day' : 'week')
    }
    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                    <span className="carouselTitle">
                        Trending
                    </span>
                    <SwitchTabs data={['Day', 'Week']} onTabChange={onTabChange} />
                </div>
                <Carousel data={data?.results} loading={loading} />
            </ContentWrapper>
        </div>
    )
}

export default Trending
