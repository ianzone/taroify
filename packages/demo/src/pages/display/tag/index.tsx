import { Cell, Tag } from "@taroify/core"
import * as React from "react"
import { useState } from "react"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

function CloseTag() {
  const [visible, setVisible] = useState(true)
  return (
    <>
      {visible && (
        <Tag color="primary" size="medium" closeable onClose={() => setVisible(false)}>
          标签
        </Tag>
      )}
    </>
  )
}

export default function TagDemo() {
  return (
    <Page title="Tag 标签" className="tag-demo">
      <Block title="基础用法">
        <Cell title="颜色 default">
          <Tag>标签</Tag>
        </Cell>
        <Cell title="颜色 primary">
          <Tag color="primary">标签</Tag>
        </Cell>
        <Cell title="颜色 info">
          <Tag color="info">标签</Tag>
        </Cell>
        <Cell title="颜色 success">
          <Tag color="success">标签</Tag>
        </Cell>
        <Cell title="颜色 warning">
          <Tag color="warning">标签</Tag>
        </Cell>
        <Cell title="颜色 danger">
          <Tag color="danger">标签</Tag>
        </Cell>
      </Block>
      <Block title="样式风格">
        <Cell title="空心样式">
          <Tag color="primary" variant="outlined" children="标签" />
        </Cell>
        <Cell title="圆角样式">
          <Tag color="primary" shape="round" children="标签" />
        </Cell>
        <Cell title="右侧圆角样式">
          <Tag color="primary" shape="roundRight" children="标签" />
        </Cell>
        <Cell title="左侧圆角样式">
          <Tag color="primary" shape="roundLeft" children="标签" />
        </Cell>
        <Cell title="可关闭标签">
          <CloseTag />
        </Cell>
      </Block>
      <Block title="标签大小">
        <Cell title="小号标签">
          <Tag color="primary" children="标签" />
        </Cell>
        <Cell title="中号标签">
          <Tag color="primary" size="medium" children="标签" />
        </Cell>
        <Cell title="大号标签">
          <Tag color="primary" size="large" children="标签" />
        </Cell>
      </Block>
      <Block title="自定义颜色">
        <Cell title="背景颜色">
          <Tag color="#7232dd" children="标签" />
        </Cell>
        <Cell title="文字颜色">
          <Tag color="#ffe1e1" textColor="#ad0000" children="标签" />
        </Cell>
        <Cell title="空心颜色">
          <Tag color="#7232dd" variant="outlined" children="标签" />
        </Cell>
      </Block>
    </Page>
  )
}