import UserProfile from '@/components/user/UserProfile'

interface PageProps {
	params: {
		id: string
	}
}

const Page = ({ params }: PageProps) => {
	return <UserProfile userId={params.id} />
}

export default Page
