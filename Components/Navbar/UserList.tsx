import { fetchUsers } from "../../utils/actions"
import DeleteButton from "./Delete"


async function UserList() {
  const users=await fetchUsers()

  return (
    <div className="mt-4">
     {users.length?<div>
      {users.map((user)=>{
return <h4 className="flex justify-between p-2" key={user.id}>{user.firstName}{user.lastName}
<DeleteButton id={user.id}/>
</h4>

      })}
     </div>:<p>No users found....</p>}
     </div>
  )
}

export default UserList