'use client';

import { deleteUser,removeUser } from "../../utils/actions";

function DeleteButton({ id }: { id: string }) {
 const removeUserWithId=removeUser.bind(null,id)
  return (
    <form action={removeUserWithId}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="bg-green-900 hover:bg-blue-700 text-white py-2 px-2 rounded capitalize cursor-pointer"
      >
        delete
      </button>
    </form>
  );
}

export default DeleteButton;
