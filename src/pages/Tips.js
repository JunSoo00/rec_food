import React from 'react'
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';

const Tips = () => {
    return (
        <div className='contents'>
            <h2>음식 팁</h2>
            <Tabs>
                <TabList>
                    <Tab>🍝양식</Tab>
                    <Tab>🍜중식</Tab>
                    <Tab>🍱한식</Tab>
                </TabList>

                <TabPanel>
                    <h2>오늘의 양식</h2>
                </TabPanel>
                <TabPanel>
                    <h2>오늘의 중식</h2>
                </TabPanel>
                <TabPanel>
                    <h2>오늘의 한식</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Tips