import React from 'react';
import { Button } from 'antd';
import './style.css'
import {DownloadOutlined} from '@ant-design/icons'

export const PrimaryButton = () => {
    <Button type="text" block>
        text
    </Button>
}

export const SecondaryButton = (props: any) => {
    const { children } = props
    return (
        <Button type="default" className='secondary'><DownloadOutlined /> {children}</Button>

    )
}