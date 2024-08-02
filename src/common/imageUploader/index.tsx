import React from 'react';
import ishh from '../../assets/images/ishika2.png'
import { Image, Space } from 'antd';
import './style.css'

const src = ishh;

export const ImageUploader = (props:any) => {

  const {preview, shape, width} = props

  return (
    <Image
      width={0}
      src={src.src}
      className={shape ? 'imageUploader' : ""}
      // preview={preview ? {
      //   toolbarRender: (
      //     _,
      //     {
      //       transform: { scale },
      //       actions: {
      //         onFlipY,
      //         onFlipX,
      //         onRotateLeft,
      //         onRotateRight,
      //         onZoomOut,
      //         onZoomIn,
      //         onReset,
      //       },
      //     },
      //   ) => (
      //     <Space size={12} className="toolbar-wrapper">
      //       <DownloadOutlined onClick={onDownload} />
      //       <SwapOutlined rotate={90} onClick={onFlipY} />
      //       <SwapOutlined onClick={onFlipX} />
      //       <RotateLeftOutlined onClick={onRotateLeft} />
      //       <RotateRightOutlined onClick={onRotateRight} />
      //       <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
      //       <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
      //       <UndoOutlined onClick={onReset} />
      //     </Space>
      //   ),
      // }: false}
    />
  );
};
