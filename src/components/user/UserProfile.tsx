interface IProps {
  userId: string
}

const UserProfile = ({userId}: IProps) => {
	return <div>UserProfile {userId}</div>
}

export default UserProfile
