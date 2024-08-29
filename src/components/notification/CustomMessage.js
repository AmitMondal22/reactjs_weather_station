import React from 'react';
import ReactDOM from 'react-dom';
import { notification } from 'antd';

const CustomMessage = (content,message='', type = 'success') => {
    notification[type]({
        message: message,
        description: content,
        placement: 'bottomRight',
        duration: 2,
    });
};

export default CustomMessage;