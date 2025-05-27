'use client'

import {
	BookOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { Button, Layout, Menu, Row, theme } from 'antd'
import { ItemType, MenuItemType } from 'antd/es/menu/interface'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import logo from '../../images/Logo.png'

const { Header, Sider, Content } = Layout

const items: ItemType<MenuItemType>[] = [
	{
		key: '/',
		icon: <UserOutlined />,
		label: 'Пользователи',
	},
	{
		key: '/courses',
		icon: <BookOutlined />,
		label: 'Курсы',
	},
]

const DashboardLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => {
	const [collapsed, setCollapsed] = useState(false)
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken()

	const router = useRouter()
	const pathname = usePathname()

	return (
		<Layout style={{ height: '100vh' }}>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<Row justify='center'>
					<Image src={logo} alt='logo' width={80} height={80} />
				</Row>
				<Menu
					theme='dark'
					mode='inline'
					defaultSelectedKeys={['/']}
					selectedKeys={[pathname]}
					items={items}
					onClick={({ key }) => {
						router.push(key)
					}}
				/>
			</Sider>
			<Layout>
				<Header style={{ padding: 0, background: colorBgContainer }}>
					<Button
						type='text'
						icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
						onClick={() => setCollapsed(!collapsed)}
						style={{
							fontSize: '16px',
							width: 64,
							height: 64,
						}}
					/>
				</Header>
				<Content
					style={{
						margin: '24px 16px',
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
						borderRadius: borderRadiusLG,
					}}
				>
					{children}
				</Content>
			</Layout>
		</Layout>
	)
}

export default DashboardLayout
