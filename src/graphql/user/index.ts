import { graphql } from '@/graphql/generated'

export const GET_USERS = graphql(
	'query GetUsers {\n  getUsers {\n    _id\n    phoneNumber\n    userName\n    userRole\n  }\n}'
)
export const GET_USERS_PAGINATED = graphql(
	'query GetUsersPaginated($args: UserListArgs!) {\n  getUsersPaginated(args: $args) {\n    total\n    users {\n      _id\n      phoneNumber\n      userName\n      userRole\n    }\n  }\n}'
)
